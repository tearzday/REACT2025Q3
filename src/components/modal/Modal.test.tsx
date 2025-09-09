import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from './Modal';

describe('Modal', () => {
  it('renders children', () => {
    render(
      <Modal onClose={vi.fn()}>
        <div>Test Content</div>
      </Modal>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('does not call onClose when clicking inside modal', async () => {
    const onClose = vi.fn();
    render(
      <Modal onClose={onClose}>
        <div>Test Content</div>
      </Modal>
    );
    await userEvent.click(screen.getByText('Test Content'));
    expect(onClose).not.toHaveBeenCalled();
  });

  it('calls onClose when clicking Close button', async () => {
    const onClose = vi.fn();
    render(
      <Modal onClose={onClose}>
        <div>Test Content</div>
      </Modal>
    );
    await userEvent.click(screen.getByText('Close'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when Escape key is pressed', async () => {
    const onClose = vi.fn();
    render(
      <Modal onClose={onClose}>
        <div>Test Content</div>
      </Modal>
    );
    await userEvent.keyboard('{Escape}');
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
