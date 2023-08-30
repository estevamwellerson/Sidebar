const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  arrowSidebar = body.querySelector(".arrow__sidebar"),
  modeSwitch = body.querySelector(".toggle__switch"),
  modeText = body.querySelector(".mode__text");


  arrowSidebar.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  });

  modeSwitch.addEventListener('click', () =>{
    body.classList.toggle('dark');

    if(body.classList.contains('dark')){
      modeText.innerText = 'Modo Claro'
    }else{
      modeText.innerText = 'Modo Escuro'
    }
  })
