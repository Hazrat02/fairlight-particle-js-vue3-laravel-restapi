<template>
    <div >
        <Particles
          id="tsparticles"
          :particlesInit="particlesInit"
       
          :options="{
                  background: {
                      color: {
                          value: '#08091b'
                      }
                  },
                  fullScreen: {
                        enable :true,
                        zIndex :-1,
                      },
                  fpsLimit: 120,
                  interactivity: {
                      events: {
                          onClick: {
                              enable: false,
                              mode: 'push'
                          },
                          onHover: {
                              enable: true,
                              mode: 'repulse'
                          },
                          resize: true
                      },
                      modes: {
                          bubble: {
                              distance: 400,
                              duration: 0,
                              opacity: 0.8,
                              size: 40
                          },
                          push: {
                              quantity: 4
                          },
                          repulse: {
                              distance: 200,
                              duration: 0.4
                          }
                      }
                  },
                  particles: {
                      color: {
                          value: '#CCE1FF'
                      },
                      links: {
                          color: '#CCE8FF',
                          distance: 150,
                          enable: true,
                          opacity: 1,
                          width: 1
                      },
                      collisions: {
                          enable: true
                      },
                      
                      move: {
                          direction: 'none',
                          enable: true,
                          outMode: 'bounce',
                          random: false,
                          speed: 2,
                          straight: true
                      },
                      number: {
                          density: {
                              enable: false,
                              area: 0
                          },
                          value: 80
                      },
                      opacity: {
                          value: 0.5
                      },
                      shape: {
                         type:props.type,
                        
                      },
                      size: {
                          random: false,
                          value: 5
                      }
                  },
                  detectRetina: true
              }"
      >

    </Particles>

    </div>
  
</template>


<script setup>
import { loadFull } from 'tsparticles';

// Define props
const props = defineProps({
  type: {
    type: String,
    required: true
  }
});

// Load tsparticles
const particlesInit = async engine => {
  await loadFull(engine);
};


</script>





<style>

</style>