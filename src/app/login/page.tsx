import { useRouter } from 'next/router';

export default function Login() {
const router = useRouter();


    return (
      <div style={styles.container}>
        <form style={styles.form}>
          <h1>Login</h1>
          
          <div style={styles.inputGroup}>
            <label>Email:</label>
            <input type="email" style={styles.input} required />
          </div>
  
          <div style={styles.inputGroup}>
            <label>Senha:</label>
            <input type="password" style={styles.input} required />
          </div>
  
          <button type="submit" style={styles.button}>Login</button>
          
        </form>
        
      </div>
    );
  }
  
  const styles = {
    container: {
    color: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
    },
    form: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      width: '300px',
      textAlign: 'center',
    },
    inputGroup: {
      marginBottom: '15px',
      textAlign: 'left',
    },
    input: {
     backgroundColor: 'white',
      width: '100%',
      padding: '8px',
      borderRadius: '4px',
      marginTop: '5px',
    },
    button: {
      padding: '10px 15px',
      backgroundColor: '#0070f3',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      width: '100%',
    },
  };
  