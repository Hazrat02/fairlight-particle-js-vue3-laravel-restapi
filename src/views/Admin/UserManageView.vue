<template>
  <div>
    <AdminDeshboardLayout>
      <div class="bg-dash-dark-2 py-4 mb-4">
        <div class="container-fluid">
          <h2 class=" mb-0">All User</h2>
        </div>
      </div>
      <!-- Breadcrumb-->
      <div class="container ">
        <div class="bg-secondary text-center rounded p-4 mt-4">
          <h3 class="p-2 ms-3 text-start">Recent Registrations</h3>

          <div class="table-responsive">
            <table
              class="table text-start align-middle table-bordered table-hover mb-0"
            >
              <thead>
                <tr class="text-white">
                  <th>#</th>
                          <th>User Name</th>
                          <th>Date of Birth</th>
                          <th>Date of Reg.</th>
                          <th>Country</th>
                          <th>Phone</th>
                          <th>Email</th>
                          <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                          v-for="(user, index) in displayedItems"
                          :key="index"
                        >
                          <th scope="row">{{ index }}</th>
                          <td>{{ user.name }}</td>
                          <td>{{ user.birth.substring(0, 10) }}</td>
                          <td>{{ user.created_at.substring(0, 10) }}</td>
                          <td>{{ user.country }}</td>
                          <td>{{ user.Phone }}</td>
                          <td>{{ user.email }}</td>
                          <td>
                            <div class="d-flex justify-content-center gap-2">
                              
                              <router-link :to="{ name: 'userdetails', params: { id: user.id } }"> <i class="fa fa-eye" style="color: beige"></i></router-link>


                              <a>
                                <i
                                  class="fa fa-trash"
                                  style="color: brown"
                                  @click="userDelete(user.id)"
                                ></i>
                              </a>
                            </div>
                          </td>
                        </tr>
              </tbody>
            </table>
            <nav v-show="totalPages > 1" aria-label="Page navigation example mt-3">
                                    <ul class="pagination justify-content-center">
                                        <li class="page-item" :class="{
                                            disabled: currentPage === 1,
                                        }">
                                            <button class="page-link" @click="previousPage" :disabled="currentPage === 1">
                                                Previous
                                            </button>
                                        </li>
                                        <li class="page-item">
                                            <span class="btn ">Page {{ currentPage }} of {{ totalPages }}</span>
                                        </li>

                                        <li class="page-item">
                                            <button class="page-link" @click="nextPage" :class="{
                                                disabled: currentPage === totalPages,
                                            }">
                                                Next
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
          </div>
        </div>

        
      </div>
      
    </AdminDeshboardLayout>
  </div>
</template>
    
    
<script>
import axios from "axios";
import { useAuthUserStore } from "../../stores/user";
import AdminDeshboardLayout from "./../../Layouts/AdminLayouts.vue";
export default {
  components :{
    AdminDeshboardLayout
  },
  data() {
    return {
      alluser: "",

      // paginate
      currentPage: 1, // The current page number
      itemsPerPage: 10, // Number of items to display per page
    };
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    userDelete(id) {
      axios
        .get(`/api/user.delete/${id}`)
        .then((response) => {






          const User = useAuthUserStore();
          this.alluser = User.deleteUser(id);

          this.$notify({
            title: "message",
            text: response.data.message,
            type: "success",
          });
        })
        .catch((error) => {
          this.$setLoading(false);
          this.$notify({
            title: "Error message",
            text: error.response.data.message,
            type: "error",
          });
        });
      this.$setLoading(false);
    },
  },

  computed: {
    // Calculate the total number of pages based on the total number of items and itemsPerPage
    totalPages() {
      return Math.ceil(this.alluser.length / this.itemsPerPage);
    },
    // Get the items to display on the current page
    displayedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.alluser.slice(start, end);
    },
  },

  async created() {
    // auth user data +++++++++++++++++++++++++++++

    const userStore = useAuthUserStore();
    const alluser = userStore.allUser;

    if (alluser) {
      this.alluser = alluser;
    } else {
      // userStore.reSetAuthUser();
      this.alluser = await userStore.getAllUser();
    }
    this.$setLoading(false);
  },
};
</script>

