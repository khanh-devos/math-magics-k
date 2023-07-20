import FetchAPI from '../utils/FetchAPI';
import { render, act } from '@testing-library/react';


describe('fetchAPI test', () => {
    // mock if dom container has been rendered
    it('should match the snapshot', () => {
        const { container } = render(<FetchAPI />);
        expect(container).toMatchSnapshot();
    });

    it('should render json()', async () => {
        jest.spyOn(global, 'fetch').mockImplementationOnce(() => Promise.resolve({
          json: () => Promise.resolve([{ quote: 'Khanh' }]),
        }));
    
        await act(async () => {
          const { asFragment } = render(<FetchAPI />);
          expect(asFragment).toMatchSnapshot();
        });
    });

    it('should render message', async () => {
        jest.spyOn(global, 'fetch').mockImplementationOnce(() => Promise.resolve({
          json: () => Promise.resolve([]),
        }));
    
        await act(async () => {
          const { asFragment } = render(<FetchAPI />);
          expect(asFragment).toMatchSnapshot();
        });
    });

    it('should render ERROR', async () => {
        jest.spyOn(global, 'fetch').mockImplementationOnce(() => "");
    
        await act(async () => {
          const { asFragment } = render(<FetchAPI />);
          expect(asFragment).toMatchSnapshot();
        });
    });
})