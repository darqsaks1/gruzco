import styled from "styled-components";

export const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border-radius: 50px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  background: #51b554;
  color: white;
   z-index: 101;

  @media (min-width: 700px) {
    display: none;
  }
  span {
    width: 2rem;
    height: 0.25rem;
    margin: 2px;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    color: white;
    border: none;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
