import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Cours from "./Cours";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { Alert } from "react-native";
import { addToPanier } from "../features/CoursesSlice";

// Mock the useDispatch hook
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

// Mock the Alert component
jest.mock('react-native', () => ({
  ...jest.requireActual('react-native'),
  Alert: {
    alert: jest.fn()
  },
}));

describe("Cours component", () => {
  const mockStore = configureStore([]);
  const initialState = {};
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it("renders correctly", () => {
    const route = {
      params: {
        course: {
          id: 1,
          title: "Test Course",
          description: "This is a test course",
          image: "https://example.com/image.jpg",
          price: 9.99
        }
      }
    };

    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Cours route={route} />
      </Provider>
    );

    // Check if the title is rendered
    expect(getByText("Test Course")).toBeDefined();

    // Check if the description is rendered
    expect(getByText("This is a test course")).toBeDefined();

    // Check if the price is rendered
    expect(getByText("9.99 $")).toBeDefined();

    // Check if the "Ajouter au panier" button is rendered
    expect(getByTestId("button-achat")).toBeDefined();
  });

  it("adds course to panier when 'Ajouter au panier' button is pressed", () => {
    const route = {
      params: {
        course: {
          id: 1,
          title: "Test Course",
          description: "This is a test course",
          image: "https://example.com/image.jpg",
          price: 9.99
        }
      }
    };

    // Mock useDispatch to return a mock function
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    const { getByTestId } = render(
      <Provider store={store}>
        <Cours route={route} />
      </Provider>
    );

    // Simulate button press
    fireEvent.press(getByTestId("button-achat"));

    // Check if the addToPanier action is dispatched with the correct payload
    expect(mockDispatch).toHaveBeenCalledWith(addToPanier(1));

    // Check if Alert.alert is called with the correct arguments
    expect(Alert.alert).toHaveBeenCalledWith("Alert", "Ajouté au panier avec succès!");
  });
});
