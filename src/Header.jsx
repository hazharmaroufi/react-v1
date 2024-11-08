function Header() {
  const isLogin = true;
  return (
    <header>
      {isLogin ? (
        <button>Dashboard</button>
      ) : (
        <>
          <button>login</button>
        </>
      )}
      {isLogin && <button>Cart</button>}
    </header>
  );
}
export default Header;
