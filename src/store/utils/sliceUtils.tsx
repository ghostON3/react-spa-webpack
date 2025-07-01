import { UnknownAction } from "@reduxjs/toolkit";

export interface RejectedAction extends UnknownAction {
	error?: { message?: string };
	payload?: string;
}

export type PendingHandler<TState> = (state: TState) => void;
export type RejectedHandler<TState> = (
	state: TState,
	action: RejectedAction,
) => void;

export const isPendingAction = (action: UnknownAction) =>
	action.type.endsWith("/pending");
export const isRejectedAction = (action: UnknownAction) =>
	action.type.endsWith("/rejected");
