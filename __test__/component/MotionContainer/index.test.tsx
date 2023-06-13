import { render } from '@testing-library/react';
import MotionContainer from '@/components/MotionContainer';

describe('MotionContainer component', () => {
  it('renders children without errors', () => {
    render(
      <MotionContainer>
        <div>Child Component 1</div>
        <div>Child Component 2</div>
      </MotionContainer>
    );
  });
});
