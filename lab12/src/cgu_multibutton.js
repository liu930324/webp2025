import Button from '@mui/material/Button';

const styleArgument = { fontSize: '20px', color: 'red' }; // 注意 color 拼字

const changeText = (event) => {
  event.target.innerText += " 被點了";
};

const multiButton = (num) => {
  const output = [];

  for (let i = 1; i <= num; ++i) {
    output.push(
      <Button
        key={i}
        variant="contained"
        color="primary"
        onClick={changeText}
        style={styleArgument}
      >
        第{i}個按鍵
      </Button>
    );
  }

  return <div>{output}</div>;
};

export default multiButton;

