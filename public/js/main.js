const cityname=document.getElementById('cityname');
const submitbtn=document.getElementById('submitbtn');

const city_name=document.getElementById('city_name');
const temp_real_val=document.getElementById('temp_real_val');
const temp_status=document.getElementById('temp_status');
const datahide=document.querySelector('.middle_layer');




const getInfo=async(event)=>{
    event.preventDefault();
    let cityval=cityname.value;
    if(cityval===""){
        city_name.innerText=`Plz write the name before search`;
        datahide.classList.add('data_hide'); 


    }   
    else{
        try{
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=5a13c18a2805b0e00ecf64fc4b7964ef`;
            const response=await fetch(url);
            const data=await response.json();
            const arrdata=[data];
            
            city_name.innerText=`${arrdata[0].name},${arrdata[0].sys.country}`;
            temp_real_val.innerText=arrdata[0].main.temp;
            const tempmood=arrdata[0].weather[0].main;

            //condition to check sunny or cloudy

            if(tempmood=="Clear"){
                temp_status.innerHTML=
                "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }else if(tempmood=="Clouds"){
                temp_status.innerHTML=
                "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }else if(tempmood=="Rain"){
                temp_status.innerHTML=
                "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            }else{
                temp_status.innerHTML=
                "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }

            datahide.classList.remove('data_hide'); 

        }catch{
            city_name.innerText=`Plz enter the correct city name`;
            datahide.classList.add('data_hide'); 
            
        }

       
      
    }


}

submitbtn.addEventListener('click',getInfo);