import React from 'react';
import sharedresponse from './images/18867.jpg'

const CardComponent = () => {
  return (
    <div style={styles.cardContainer}>
      <div style={styles.card}>
        <div style={styles.imageWrapper}>
          <img
            style={styles.cardBackground}
            src={sharedresponse}
            alt="Photo of Cartagena's cathedral"
          />
        </div>
        <div style={styles.cardContent}>
          <div style={styles.cardTitle}>
            Colombia
           
          </div>
          <div style={styles.cardDescription}>
                <p>Hardware requirements (GPU, RAM, Storage)</p>
                <p>ec2 type with pricing</p>
                <p>Model suggestions</p>
                <p>usage patterns - based on uptime</p>
            </div>
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  cardContainer: {
    display: 'grid',
    placeItems: 'center',
    height: '100vh',
    
  },
  card: {
    display: 'grid',
    placeItems: 'center',
    width: '80vw',
    maxWidth: '21.875rem',
    height: '28.125rem',
    overflow: 'hidden',
    borderRadius: '0.625rem',
    boxShadow: '0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.25)',
    position: 'relative',
    
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: '100%',
    
  },
  cardBackground: {
    objectFit: 'cover' as React.CSSProperties['objectFit'],
    width: '100%',
    height: '100%',
  },
  cardContent: {
    position: 'absolute',
    bottom: '0',
    maxHeight:'100%',
    color: 'white',
    zIndex: 1, 
    padding: '1rem',
    maxWidth: '100%', 
    background: "linear-gradient(180deg,hsla(0, 0%, 0%, 0) 0%,hsla(0, 0%, 0%, 0.3) 10%, hsl(0, 0%, 0%) 100%)",
  },
  cardTitle: {
    fontSize: '2.25rem',
    fontFamily: "'Montserrat', sans-serif",
    lineHeight: '1.1',
    fontWeight: 'bold',
    position: 'relative',
  },
  
  cardDescription: {
    fontFamily: "'Lato', sans-serif",
    fontSize: '1rem',
    lineHeight: '1.5',
    marginTop: '0.5rem',
  }
};

export default CardComponent;
