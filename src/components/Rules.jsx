import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <RulesList>
        <li>Select any number</li>
        <li>Click on the dice</li>
        <li>
          After clicking on the dice if selected number is equal to dice number you
          will get same point as the number on the dice
        </li>
        <li>If you get wrong guess, then 2 points will be deducted</li>
      </RulesList>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  text-align: center;

  h2 {
    font-size: 24px;
  }
`;

const RulesList = styled.ul`
  text-align: left;
  max-width: 600px;
  margin: 24px auto;
  list-style-type: disc;
  padding-left: 40px;

  li {
    margin-bottom: 10px;
  }
`;
