
import {CLOSE_MODAL, OPEN_MODAL} from "./index-reducer";
import {initialState} from "./modal-view-reducer";
import {modalViewReducer} from "./modal-view-reducer";
describe("It is test for modal reducer which trying to execute OPEN_MODAL & CLOSE_MODAL", () => {

        it('should  return initial state of reducer', function () {

            expect(modalViewReducer(undefined, {})).toEqual(initialState);
        });

        it("should handle OPEN_MODAL action", () => {
            const action = {
                type: OPEN_MODAL,
            };

            const newState = modalViewReducer(initialState, action);

            expect(newState).toEqual({
                openModal: true,
            });
        });
        it("should handle CLOSE_MODAL action", () => {
            const action = {
                type: CLOSE_MODAL,
            };

            const newState = modalViewReducer(initialState, action);

            expect(newState).toEqual({
                openModal: false,
            });
        });

    }
)
