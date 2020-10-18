
import styled from 'styled-components';

export const Wrapper = styled.div`
.card { 
  height: auto;
  min-height: 271px;
  width: auto; 
  overflow: hidden; 
  margin: 12px; 
  border-radius: 5px; 
  box-shadow: 9px 17px 45px -29px
              rgba(0, 0, 0, 0.44); 
} 

/* Card image loading */
.card__image img { 
  width: 100%; 
  height: 100%; 
} 

.card__image.loading { 
  height: 300px; 
  width: 400px; 
} 

/* Card title */
.card__title { 
  padding: 8px; 
  font-size: 22px; 
  font-weight: 700; 
} 

.card__title.loading { 
  height: 1rem; 
  width: 50%; 
  margin: 1rem; 
  border-radius: 3px; 
} 

/* Card description */
.card__description { 
  padding: 8px; 
  font-size: 16px; 
} 

.card__description.loading { 
  height: 3rem; 
  margin: 1rem; 
  border-radius: 3px; 
} 

/* The loading Class */
.loading { 
  position: relative; 
} 

/* The moving element */
.loading::after { 
  display: block; 
  content: ""; 
  position: absolute; 
  width: 100%; 
  height: 100%; 
  transform: translateX(-100%); 
  background: -webkit-gradient(linear, left top, 
              right top, from(transparent),  
              color-stop(rgba(255, 255, 255, 0.2)), 
              to(transparent)); 
                
  background: linear-gradient(90deg, transparent, 
          rgba(255, 255, 255, 0.2), transparent); 

  /* Adding animation */
  animation: loading 0.8s infinite; 
} 

/* Loading Animation */
@keyframes loading { 
  100% { 
      transform: translateX(100%); 
  } 
} 
`;

export default Wrapper;
