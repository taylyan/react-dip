import React, { useState, useEffect } from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  const [thingSpeakValue, setThingSpeakValue] = useState(null);

  useEffect(() => {
    // Функция за извличане на информация от ThingSpeak
    const fetchThingSpeakValue = async () => {
      try {
        /*
        const apiKey = '7JNHTJGWR1NBR2OX'; // Заменете с ваш API ключ
        const fieldNumber = '1'; // Заменете с номера на полето, което искате да извлечете

        const response = await fetch(`https://api.thingspeak.com/channels/CHANNEL_ID/fields/${fieldNumber}/last.json?api_key=${apiKey}`);
        */
        const response = await fetch(`https://api.thingspeak.com/channels/2295351/fields/7JNHTJGWR1NBR2OX/last.json?api_key=1`);
        
        //const response = await fetch(`https://api.thingspeak.com/update?api_key=7JNHTJGWR1NBR2OX&field1=0`);       
        const data = await response.json();

        if (data.field1) {
          setThingSpeakValue(data.field1);
        }
      } catch (error) {
        console.error("Грешка при извличане на информация от ThingSpeak:", error);
      }
    };

    // Извикване на функцията за извличане при зареждане на компонента и всеки 15 секунди
    fetchThingSpeakValue();
    const intervalId = setInterval(fetchThingSpeakValue, 15000);

    // Отписване от интервала при излизане от компонента
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <p>ThingSpeak Value: {thingSpeakValue}</p>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
