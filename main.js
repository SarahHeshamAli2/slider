

    // select all images and changing node list to array to easy use array methods with it
    let myAllImages = Array.from(document.querySelectorAll('.slides img'))
    
    let imagesCount = myAllImages.length
    

    let currentImage = 0  
    let next = document.querySelector('.next');
	let prev = document.querySelector('.prev');


    function nextSlide () {
    
        currentImage++
        if (currentImage == imagesCount) {
            currentImage = 0
        }
        checkingActive()
        
        
    }

    function prevSlide () {
       
        if ( currentImage <=0) {
            currentImage = imagesCount
            
        }
        currentImage--

        checkingActive()
        
        
    }



    next.addEventListener('click',nextSlide)
    prev.addEventListener ('click' , prevSlide)


    let myDotsUl = document.createElement('ul');
    myDotsUl.setAttribute('id','pagination-ul') 
    
    for(let i=0 ; i<imagesCount ; i++) {
        let dotsLi = document.createElement('li');
        dotsLi.setAttribute('class' , 'dot')
        dotsLi.setAttribute('data-target' , i)
        myDotsUl.appendChild(dotsLi)        


    }

    let dotsContainer = document.querySelector('.dotsContainer')
    dotsContainer.appendChild (myDotsUl)

    let myNewCreatedUl = document.getElementById('pagination-ul')
   
    
    let myLiArray = Array.from (myNewCreatedUl.children)


    for (let i=0 ; i<myLiArray.length ;i++) {
        myLiArray[i].onclick = function (){
            
            currentImage = parseInt(this.getAttribute('data-target'))
            checkingActive()

        }
    }
    

    

    function checkingActive () {


        removeActiveClass ()

        myAllImages [currentImage ].classList.add('active')
        myNewCreatedUl.children[currentImage].classList.add('active')


        

    
        
    }
    checkingActive ()


    function removeActiveClass () {

        myAllImages.forEach((img)=>img.classList.remove('active')
        )
        myLiArray.forEach((li)=>li.classList.remove('active'))
    }


    	// Auto slideing
	function autoSliding(){
		deletInterval = setInterval(timer, 3000);
		function timer(){
			nextSlide();
		}
	}
	autoSliding();
	// Stop auto sliding when mouse is over
	const container = document.querySelector('.slide-container');
	container.addEventListener('mouseover', function(){
		clearInterval(deletInterval);
	});
	container.addEventListener('mouseout', autoSliding);


    //swipe for mobile touch screen

    document.addEventListener ('keydown' , function(e){
        if (e.code == "ArrowRight") {
            nextSlide()
        }
        else if (e.code == 'ArrowLeft') {

            prevSlide ()

        }
   
        
    })