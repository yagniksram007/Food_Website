import React from 'react';

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Masala Dosa',
      price: 'Rupees: 70',
      image: 'https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg',
    },
    {
      id: 2,
      name: 'Grilled Chutney Sandwich',
      price: 'Rupees: 55',
      image: 'https://static01.nyt.com/images/2016/04/12/dining/grilledcheese-copy/grilledcheese-master768.jpg',
    },
    {
      id: 3,
      name: 'Margherita Pizza',
      price: 'Rupees: 120',
      image: 'https://static01.nyt.com/images/2014/04/09/dining/09JPPIZZA2/09JPPIZZA2-superJumbo-v3.jpg',
    },
    {
      id: 4,
      name: 'Tiramisu',
      price: 'Rupees: 90',
      image: 'https://www.kingarthurbaking.com/sites/default/files/2023-03/Tiramisu_1426.jpg',
    },
    {
      id: 5,
      name: 'Chocolate Cake',
      price: 'Rupees: 200',
      image: 'https://static01.nyt.com/images/2014/01/23/dining/recipes-decadentchocolatecake/recipes-decadentchocolatecake-superJumbo.jpg',
    },
    {
      id: 6,
      name: 'Water melon juice',
      price: 'Rupees: 50',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAbCUUZL5lmZ2bbLmA6TMuCl3bdkGAAInkPQ&usqp=CAU',
    },
  ];

  return (
    <div>
      <center>
        <h1><b><u>Menu</u></b></h1>
      </center>

      <div className="row justify-content-center">
        {menuItems.map((item) => (
          <div key={item.id} className="col-md-4">
            <div className="card">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.price}</p>
              </div>
            </div>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;