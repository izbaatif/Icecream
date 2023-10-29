// this helps the compiler understand how to handle this file as JSX
import React from 'react';

import styles from './stylesheet/my-style.module.css';

// the $ sign is used to select DOM elements in jQuery
import $ from 'jquery';

export default class App extends React.Component {
    // function to run when app is mounted
    componentDidMount() {

        var initialText = $(".seeMore").text();
        $("#hiddenmenu").css("display" , "none");
        $(".seeMore").click(function(){
            $("#hiddenmenu").slideToggle();
            if($(".seeMore").text() === initialText)
            {
                $(".seeMore").html(' See Less  <i class="fa-solid fa-angle-up"></i>')
            }
            else{
                $(".seeMore").html(' See More   <i class="fa-solid fa-angle-down"></i>')
            }
            
            
          })
    }


    render() {
      return (
        <>
    <nav className={`${styles['navbar']} navbar navbar-expand-md navbar-light`}>
        <a className="navbar-brand" href=""> <i className={`${styles['top-logo']} fa-solid fa-ice-cream`}></i> </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className={`${styles['nav-link']} nav-link`} href="#menu">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className={`${styles['nav-link']} nav-link`} href="#deals">
                Deals
              </a>
            </li>
            <li className="nav-item">
              <a className={`${styles['nav-link']} nav-link`} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

    <div className={styles.topcontainer}> 
      <img src={require('./images/background.jpg')} alt="Ice creams" className={styles.backgroundimage}/> 
      <div className ={styles.nametag}>  
        <div className ={styles.logo}>
          <i className="fa-solid fa-ice-cream">
          <br /> 
          <h1 className={styles.headingText}> Ice cream </h1> </i>
        </div>
        <div className={styles.rightText}> 
          <p className={styles.intro}> Welcome to our charming ice cream parlour, a haven of frozen delights! Our journey begins with an unwavering passion for crafting the most exquisite frozen treats. As you step inside, the scent of freshly baked waffle cones envelops you, promising a world of irresistible flavors. From classic vanilla to inventive, exotic creations, we offer a diverse range to cater to every craving. </p>
          <p className={styles.intro}>Our commitment to quality shines in every scoop, using the finest ingredients and locally sourced products when available. And it's not just about ice cream; it's about creating memorable moments with friends and family. We're dedicated to making your experience unforgettable. Come, explore our ever-changing menu and indulge in a delicious adventure, one scoop at a time!</p> 
        </div>
      </div>
    </div>

    <section id = "feature">
    
    <div className ={styles.containerfluid}>
      
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <i className= {`${styles['icons']} fa-regular fa-heart`}></i>
          <h3 className={styles.featureheading}>Good Quality</h3>
          <p className={styles.featurepara}> The best quality icecream you'll find. </p>
        </div>
    
        <div className="col-md-4 col-sm-12">
          <i className={`${styles['icons']} fa-solid fa-money-bill`}></i>
          <h3 className={styles.featureheading}> Great Prices </h3>
          <p className={styles.featurepara}> Easily affordable delicious icecream.</p>
        </div>
    
        <div className="col-md-4 col-sm-12">
          <i className={`${styles['icons']} fa-regular fa-circle-check`}></i> 
          <h3 className={styles.featureheading}> Variety of Flavours</h3>
          <p className={styles.featurepara}> Pick your favourite flavours.</p>
        </div>
    
      </div>
    </div>
    
    </section>

    <section id="menu">
      <div className={styles.menuback}>
        <h1 className = {styles.menuHeading}> Menu </h1>

        <div className="row">

        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className={`${styles['card']} card`}>
              <div className="card-body">
              <img src="https://cdn.webshopapp.com/shops/218525/files/368089441/320x320x2/cheshire-farm-ice-cream-vanilla-ice-cream-125ml.jpg" alt="vanilla icecream scoop" className={styles.cardImg} />
                <h2 className={styles.menutext}> Vanilla Scoop </h2>
                <p className={styles.menupara}> $2.0 </p>
                <p className={styles.menudesc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat felis felis, posuere consectetur nunc viverra convallis. Cras sed purus euismod, mollis augue sit amet, tempus libero. Cras eu nunc eu libero ultricies lacinia nec id mi.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className={`${styles['card']} card`}>
              <div className="card-body">
                <img src="https://brandsitesplatform-res.cloudinary.com/image/fetch/w_auto:100,c_scale,q_auto:eco,f_auto,fl_lossy,dpr_auto,e_sharpen:85/https://assets.brandplatform.generalmills.com%2F-%2Fmedia%2Fproject%2Fgmi%2Fhaagendazs%2Fhaagendazs-master%2Fbsp%2Fhd%2Fproduct-images%2Fscoops%2Fbelgian-chocolate-v2.png%3Frev%3De989720cdcf2439bab415185f38e29a8" alt="chocolate icecream scoop" className={styles.cardImg} /> 
                <h2 className={styles.menutext}> Chocolate Scoop </h2>
                <p className={styles.menupara}> $2.0 </p>
                <p className={styles.menudesc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat felis felis, posuere consectetur nunc viverra convallis. Cras sed purus euismod, mollis augue sit amet, tempus libero. Cras eu nunc eu libero ultricies lacinia nec id mi.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className={`${styles['card']} card`}>
              <div className="card-body">
                <img src="https://img.freepik.com/premium-photo/strawberry-ice-cream-scoop_488220-42162.jpg" alt="strawberry icecream scoop" className={styles.cardImg} />
                <h2 className={styles.menutext}> strawberry Scoop </h2>
                <p className={styles.menupara}> $2.0 </p>
                <p className={styles.menudesc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat felis felis, posuere consectetur nunc viverra convallis. Cras sed purus euismod, mollis augue sit amet, tempus libero. Cras eu nunc eu libero ultricies lacinia nec id mi.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className={`${styles['card']} card`}>
              <div className="card-body">
                <img src="https://i.pinimg.com/736x/67/1d/9d/671d9d05cedf800afa7f8f8c7db8d9e0.jpg" alt="chocolatechip icecream scoop" className={styles.cardImg} />
                <h2 className={styles.menutext}> Chocolate Chip Scoop </h2>
                <p className={styles.menupara}> $2.0 </p>
                <p className={styles.menudesc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat felis felis, posuere consectetur nunc viverra convallis. Cras sed purus euismod, mollis augue sit amet, tempus libero. Cras eu nunc eu libero ultricies lacinia nec id mi.</p>
              </div>
            </div>
          </div>

          </div>

          <div id="hiddenmenu">

          <div className="row">

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className={`${styles['card']} card`}>
              <div className="card-body">
                <img src="https://s3.envato.com/files/262944060/2019_02_28_1940.jpg" alt="mango icecream scoop" className={styles.cardImg} />
                <h2 className={styles.menutext}> Mango Scoop </h2>
                <p className={styles.menupara}> $2.0 </p>
                <p className={styles.menudesc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat felis felis, posuere consectetur nunc viverra convallis. Cras sed purus euismod, mollis augue sit amet, tempus libero. Cras eu nunc eu libero ultricies lacinia nec id mi.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className={`${styles['card']} card`}>
              <div className="card-body">
                <img src="https://as1.ftcdn.net/v2/jpg/02/34/44/22/1000_F_234442244_wfewmQSapELIrzzDk1kbqSEz2I0GvoAh.jpg" alt="mint icecream scoop" className={styles.cardImg} />
                <h2 className={styles.menutext}> Mint Scoop </h2>
                <p className={styles.menupara}> $2.0 </p>
                <p className={styles.menudesc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat felis felis, posuere consectetur nunc viverra convallis. Cras sed purus euismod, mollis augue sit amet, tempus libero. Cras eu nunc eu libero ultricies lacinia nec id mi.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className={`${styles['card']} card`}>
              <div className="card-body">
                <img src="https://www.carvel.com/-/media/carvel/menu/ice-cream/scooped/cookie-dough.png?v=1&d=20180420T162555Z" alt="cookiedough icecream scoop" className={styles.cardImg} />
                <h2 className={styles.menutext}> Cookie Dough Scoop </h2>
                <p className={styles.menupara}> $2.0 </p>
                <p className={styles.menudesc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat felis felis, posuere consectetur nunc viverra convallis. Cras sed purus euismod, mollis augue sit amet, tempus libero. Cras eu nunc eu libero ultricies lacinia nec id mi.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className={`${styles['card']} card`}>
              <div className="card-body">
                <img src="https://www.fnncreameries.com/wp-content/uploads/2020/02/132-1.png" alt="cottoncandy icecream scoop" className={styles.cardImg} />
                <h2 className={styles.menutext}> Cotton Candy Scoop </h2>
                <p className={styles.menupara}> $2.0 </p>
                <p className={styles.menudesc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat felis felis, posuere consectetur nunc viverra convallis. Cras sed purus euismod, mollis augue sit amet, tempus libero. Cras eu nunc eu libero ultricies lacinia nec id mi.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className={`${styles['card']} card`}>
              <div className="card-body">
                <img src="https://st2.depositphotos.com/2370557/6824/i/450/depositphotos_68244915-stock-photo-scoop-of-mango-ice-cream.jpg" alt="pistachio icecream scoop" className={styles.cardImg} />
                <h2 className={styles.menutext}> Pistachio Scoop </h2>
                <p className={styles.menupara}> $2.0 </p>
                <p className={styles.menudesc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat felis felis, posuere consectetur nunc viverra convallis. Cras sed purus euismod, mollis augue sit amet, tempus libero. Cras eu nunc eu libero ultricies lacinia nec id mi.</p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className={`${styles['card']} card`}>
              <div className="card-body">
                <img src="https://www.carvel.com/-/media/carvel/menu/ice-cream/scooped/40-butter_pecan.png?v=1&d=20180327T225039Z" alt="butter pecan icecream scoop" className={styles.cardImg} />  
                <h2 className={styles.menutext}> Butter Pecan Scoop </h2>
                <p className={styles.menupara}> $2.0 </p>
                <p className={styles.menudesc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat felis felis, posuere consectetur nunc viverra convallis. Cras sed purus euismod, mollis augue sit amet, tempus libero. Cras eu nunc eu libero ultricies lacinia nec id mi.</p>
              </div>
            </div>
          </div>

          </div>

        </div>

        <button className={`${styles['seeMore']} seeMore`} > See More   <i class="fa-solid fa-angle-down"></i> </button>

      </div>

    </section>

    

    <section id="deals">
        <div className ={styles.containerfluid}>
        

        <div id="carouselExampleSlideOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="hover">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className={styles.carouselbackground}>
                <img src="https://img.freepik.com/premium-photo/ice-cream-scoops-bowl-with-wafer-white-background_488220-3941.jpg" alt="six scoops in a bowl" className={styles.carouselImages} />
                <div className={styles.carouselText}>
                    <h1> Deal Name <br />
                    Price</h1>  <br />
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat felis felis, posuere consectetur nunc viverra convallis. Cras sed purus euismod, mollis augue sit amet, tempus libero. Cras eu nunc eu libero ultricies lacinia nec id mi</p>
                </div>
            </div>
          </div>

          <div class="carousel-item">
            <div className={styles.carouselbackground}>
                <img src="https://img.myloview.com/posters/strawberry-chocolate-and-vanilla-ice-cream-scoops-with-in-bowl-isolated-on-white-background-700-154885221.jpg" alt="three scoops in a bowl" className={styles.carouselImages} />
                <div className={styles.carouselText}>
                    <h1> Deal Name <br />
                     Price</h1>  <br />
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat felis felis, posuere consectetur nunc viverra convallis. Cras sed purus euismod, mollis augue sit amet, tempus libero. Cras eu nunc eu libero ultricies lacinia nec id mi</p>
                </div>
            </div>
          </div>

          <div class="carousel-item">
            <div className={styles.carouselbackground}>
                <img src="https://media.istockphoto.com/id/1208458777/photo/two-chocolate-ice-cream-scoops-close-up-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=zUbnO9qrZF1Bh1sEcfk1eD04fbgVn-STxz_Rex62GnE=" alt="two scoops in a bowl" className={styles.carouselImages} />
                <div className={styles.carouselText}>
                    <h1> Deal Name <br />
                     Price</h1>  <br />
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat felis felis, posuere consectetur nunc viverra convallis. Cras sed purus euismod, mollis augue sit amet, tempus libero. Cras eu nunc eu libero ultricies lacinia nec id mi</p>
                </div>
            </div>
          </div>

        </div>
      </div>
      </div>
      

    </section>

    <section id="contact">

    <div class={styles.footer}>
      <i className={`${styles['apps']} fab fa-twitter`}></i>
      <i className={`${styles['apps']} fab fa-facebook-f`}></i>
      <i className={`${styles['apps']} fab fa-instagram`}></i>
      <i className={`${styles['apps']} fa-solid fa-envelope`}></i>
      <p>© Copyright </p>
    </div>

    </section>

        

    </>
      );
    }
  }
  