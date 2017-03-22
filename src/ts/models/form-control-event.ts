import * as React from "react";

export interface FormControlEvent extends React.FormEvent {
    currentTarget: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
}
