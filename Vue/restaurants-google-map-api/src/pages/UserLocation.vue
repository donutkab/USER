<template>
    <!-- <h1>User Location Page</h1> -->
    <div>
    <section class="ui two column centered grid" style="position:relative; z-index:1">
        <div class="column">
            <form class="ui segment large form">
                <div class="ui message red"></div>
                <div class="ui segment">

                     <div class="field">
                        <div class="ui right icon input large">
                            <input type="text" placeholder="Enter your address...." /> 
                                <i class="dot circle link icon" @click="locatorButtonPressed"></i>
                         </div>  
                    </div>
                    <button class="ui button">Go</button>
                </div>


                </form>
        </div>

    </section>
     <!-- <longdo-map>         
       <longdo-map-polygon             
           :location="locationList"             
           :lineWidth="2"             
           :lineColor="'rgba(0, 0, 0, 1)'"
           :fillColor="'rgba(255, 0, 0, 0.4)'"/>     
    </longdo-map> -->
    
 <longdo-map>         
       <longdo-map-polygon             
           :location="locationList"             
           :lineWidth="2"             
           :lineColor="'rgba(0, 0, 0, 1)'"
           :fillColor="'rgba(255, 0, 0, 0.4)'"/>     
    </longdo-map>
    <h1>213123</h1>
    </div>

</template>


<script>
// import { LongdoMap } from 'longdo-map-vue'
// LongdoMap.init('AIzaSyAsMQMpcepCRIT-7xEOQJNy0OIZjbxYhiQ')
export default {

data() {
         return {
             locationList: [
                 { lon: 99, lat: 14 },
                 { lon: 100, lat: 13 },
                 { lon: 102, lat: 13 },
                 { lon: 103, lat: 14 }
             ]
         }
     }
    ,

    methods:{
        locatorButtonPressed(){
            if(navigator.geolocation){
                // get current location
                navigator.geolocation.getCurrentPosition(
                    position=>{
                        console.log(position.coords.latitude);
                        console.log(position.coords.longitude);

                        this.showUserLocationOnTheMap(position.coords.latitude,osition.coords.longitude)
                    },
                    error =>{
                        console.log(console.error.message);
                    }
                )

            } else{
                console.log("Your Browser does not support geolocation API")
            }
        },
        showUserLocationOnTheMap(latitude, longitude){
            // var myLatlng = new google.maps.LatLng(13.841227799999999, 100.43328480000001);
            let map = new google.maps.Map(document.getElementById('map'), {
                zoom:15,
                  center: new google.maps.LatLng(latitude,longitude),
                // center: myLatlng ,
                mapTypeId:  google.maps.MapTypeId.ROADMAP,
            })
        }
    }
    
};
</script>

<style >
.ui.button,
.dot.circle.icon{
 background-color: #ff5a5f;
 color:white;
}

#map{
    position: absolute;
    top: 0;
    right:0;
    bottom: 0;
    left: 0;
    background: red;
}
</style>