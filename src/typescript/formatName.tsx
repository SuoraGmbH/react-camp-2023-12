interface User {
  firstName: string;
  lastName: string;
}

// Typisierung des Rückgabetypen KANN nützlich sein, wenn die funktion komplex wird
function formatName(user: User): string {
  // if (user.firstName.length > 5) {
  //   return null; // Gibt einen fehler, weil oben explizit string typisiert haben
  // }

  return `${user.firstName} ${user.lastName}`;
}

// Variablen typisiern KANN hilfreich sein, wenn sie komplex werden, oder man auto-vervollständigung will
const user: User = {
  firstName: "Miriam",
  lastName: "Janssen",
};

export const element = <h1>👋, {formatName(user)}!</h1>;
