import React, { useState, useEffect } from 'react';
import NavCard from './NavCard.js';
import '../styles/NavOptios.css';

const NavOptions = ({ MiPhones, redmiPhones, tv, laptop, fitnessAndLifeStyle, home, audio, accessories }) => {
  const [miPhoneToggle, setMiPhoneToggle] = useState(false);
  const [redmiPhoneToggle, setRedmiPhoneToggle] = useState(false);
  const [tvToggle, setTvToggle] = useState(false);
  const [laptopToggle, setLaptopToggle] = useState(false);
  const [fitnessToggle, setFitnessToggle] = useState(false);
  const [homeToggle, setHomeToggle] = useState(false);
  const [audioToggle, setAudioToggle] = useState(false);
  const [accessoriesToggle, setAccessoriesToggle] = useState(false);

  useEffect(() => {
    const { pathname } = window.location;
    if (pathname === '/#miphone') {
      setMiPhoneToggle(true);
    } else if (pathname === '/#redmiphones') {
      setRedmiPhoneToggle(true);
    } else if (pathname === '/#tv') {
      setTvToggle(true);
    } else if (pathname === '/#laptops') {
      setLaptopToggle(true);
    } else if (pathname === '/#lifestyle') {
      setFitnessToggle(true);
    } else if (pathname === '/#home') {
      setHomeToggle(true);
    } else if (pathname === '/#audio') {
      setAudioToggle(true);
    } else if (pathname === '/#accessories') {
      setAccessoriesToggle(true);
    }
  }, []);

  return (
    <div className="navOptions">
      {miPhoneToggle &&
        MiPhones.map((item) => (
          <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        ))}
      {redmiPhoneToggle &&
        redmiPhones.map((item) => (
          <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        ))}
      {tvToggle &&
        tv.map((item) => (
          <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        ))}
      {laptopToggle &&
        laptop.map((item) => (
          <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        ))}
      {fitnessToggle &&
        fitnessAndLifeStyle.map((item) => (
          <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        ))}
      {homeToggle &&
        home.map((item) => (
          <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        ))}
      {audioToggle &&
        audio.map((item) => (
          <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        ))}
      {accessoriesToggle &&
        accessories.map((item) => (
          <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
        ))}
    </div>
  );
};

export default NavOptions;
