export interface UserInterface {
  firstName: string;
  lastName: string;
  remember: boolean;
  email: string;
}

export interface CartInterface {
  [email: string]: {
    heart: Array<{ id: number; url: string }>;
    bookmark: Array<{ id: number; url: string }>;
  };
}

export interface SignupInterface {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfJoining: Date;
  password: string;
  remember: boolean;
}

export interface LoginInterface {
  email: string;
  remember: boolean;
  password: string;
}

export interface ForgotInterface {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  createdAt: Date;
}

export interface NewPasword {
  password: string;
  token: string;
}

export interface State {
  user: {
    firstName: string;
    lastName: string;
    remember: boolean;
    email: string;
  };
  cart: {
    [email: string]: {
      heart: Array<{ id: number; url: string }>;
      bookmark: Array<{ id: number; url: string }>;
    };
  };
}

export interface Home {
  imageUrl: string;
  houseName: string;
  ratings: number;
  price: number;
  location: string;
  bhk: number;
  ownedBy: string;
}
