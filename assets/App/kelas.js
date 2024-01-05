// nama kelas bagian nav
const data = '../assets/data/kelas.json';

function namaKelas(){
   let namakelas = '';

   fetch(data)
   .then(classname => classname.json())
   .then(response => {
      for (const classname of response.classname) {
         namakelas += `${classname.navjudul}`;
         document.querySelectorAll('.nav-judul')
         .forEach(element => {
            element.innerHTML = namakelas;
         });
      };
   });
};

function dispFooter(){
   let dFooter = '';

   fetch(data)
   .then(footer => footer.json())
   .then(response => {
      for (const footer of response.footer) {
         dFooter += `${footer.footerinner}`;
      };
      document.querySelector('.innerfooter').innerHTML = dFooter;
   })
}

namaKelas();
dispFooter();