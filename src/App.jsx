function App() {
  const handleSave = () => alert('Data Disimpan!');
  const handleDelete = () => alert('Data Dihapus!');

  return (
    <div className="app" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <Header />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <Footer />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button text="Simpan" color="green" onClick={handleSave} />
        <Button text="Hapus" color="red" onClick={handleDelete} />
        <Button text="Klik Saya" onClick={() => console.log('Button diklik')} />
      </div>
    </div>
  )
}

function Header() {
  return (
    <header style={{
      background: '#6366f1',
      color: 'white',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1>My Todo App</h1>
      <p>Hari 1 - React Fundamentals</p>
    </header>
  );
}

function TodoItem() {
  const taskName = "Belajar React";
  const isComplete = false;
  const priority = 'high';

  return (
    <div style={{
      border: '1px solid #e5e7eb',
      padding: '15px',
      margin: '10px 0',
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: isComplete ? '#d1fae5' : 'white'
    }}>
      <span style={{
        textDecoration : isComplete ? 'line-through' : 'none'
       }}>
        {taskName}
       </span>
       {priority === 'high' && (
        <span style={{
          marginLeft: '10px',
          background: '#fecaca',
          padding: '2px 8px',
          borderRadius: '4px',
          fontSize: '12px'
        }}>
          🔥 High Priority
        </span>
       )}
      <button style={{
        background: '#ef4444',
        color: 'white',
        border: 'none',
        padding: '5px 15px',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Delete
      </button>
    </div>
  );
}

function Button({ text, color, onClick }) {
  const buttonStyle = {
      backgroundColor: color || 'blue', // Default ke biru jika props color kosong
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      margin: '5px'
  };

  return (
    <button onClick={onClick} style={buttonStyle} >
      {text}
    </button>
  );
}

function Footer() {
  const totalTasks =  3;
  const today = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <footer style={{
      background: '#f3f4f6',
      textAlign: 'center',
      padding: '20px',
      marginTop: '20px',
      borderTop: '2px solid #e5e7eb' // Border atas
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '10px'
      }}>
        <span style={{ fontSize: '24px' }}>📝</span>
        <p style={{ margin: '0', fontWeight: 'bold', fontSize: '16px' }}>
          Total Task: {totalTasks}
        </p>
      </div>
      <p style={{
        margin: '0',
        color: '#6b7280',
        fontSize: '14px'
      }}>
        📅 {today}
      </p>
    </footer>
  );
}

export default App;