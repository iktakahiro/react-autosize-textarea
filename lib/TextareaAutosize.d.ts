/// <reference types="react" />
import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type TextareaAutosizeRequiredProps = React.HTMLProps<HTMLTextAreaElement> & {
    /** Called whenever the textarea resizes */
    onResize?: (e: React.SyntheticEvent<Event>) => void;
    /** Minimum number of visible rows */
    rows?: React.HTMLProps<HTMLTextAreaElement>['rows'];
    /** Maximum number of visible rows */
    maxRows?: number;
    /** Called with the ref to the DOM node */
    innerRef?: (textarea: HTMLTextAreaElement) => void;
};
export declare type TextareaAutosizeDefaultProps = {
    rows: number;
};
export declare namespace TextareaAutosize {
    type Props = TextareaAutosizeRequiredProps & Partial<TextareaAutosizeDefaultProps>;
}
export declare type State = {
    lineHeight: number | null;
};
/**
 * A light replacement for built-in textarea component
 * which automaticaly adjusts its height to match the content
 */
export default class TextareaAutosize extends React.Component<TextareaAutosize.Props, State> {
    static defaultProps: TextareaAutosizeDefaultProps;
    static propTypes: {
        [key in keyof TextareaAutosize.Props]: PropTypes.Requireable<any>;
    };
    state: {
        lineHeight: null;
    };
    textarea: HTMLTextAreaElement;
    currentValue: TextareaAutosize.Props['value'];
    componentDidMount(): void;
    componentWillUnmount(): void;
    dispatchEvent: (EVENT_TYPE: "autosize:update" | "autosize:destroy" | "autosize:resized") => void;
    updateLineHeight: () => void;
    onChange: (e: React.SyntheticEvent<HTMLTextAreaElement>) => void;
    saveDOMNodeRef: (ref: HTMLTextAreaElement) => void;
    getLocals: () => {
        saveDOMNodeRef: (ref: HTMLTextAreaElement) => void;
        style: React.CSSProperties | undefined;
        onChange: (e: React.SyntheticEvent<HTMLTextAreaElement>) => void;
        children?: React.ReactNode;
        accept?: string | undefined;
        acceptCharset?: string | undefined;
        action?: string | undefined;
        allowFullScreen?: boolean | undefined;
        allowTransparency?: boolean | undefined;
        alt?: string | undefined;
        as?: string | undefined;
        async?: boolean | undefined;
        autoComplete?: string | undefined;
        autoFocus?: boolean | undefined;
        autoPlay?: boolean | undefined;
        capture?: boolean | undefined;
        cellPadding?: string | number | undefined;
        cellSpacing?: string | number | undefined;
        charSet?: string | undefined;
        challenge?: string | undefined;
        checked?: boolean | undefined;
        cite?: string | undefined;
        classID?: string | undefined;
        cols?: number | undefined;
        colSpan?: number | undefined;
        content?: string | undefined;
        controls?: boolean | undefined;
        coords?: string | undefined;
        crossOrigin?: string | undefined;
        data?: string | undefined;
        dateTime?: string | undefined;
        default?: boolean | undefined;
        defer?: boolean | undefined;
        disabled?: boolean | undefined;
        download?: any;
        encType?: string | undefined;
        form?: string | undefined;
        formAction?: string | undefined;
        formEncType?: string | undefined;
        formMethod?: string | undefined;
        formNoValidate?: boolean | undefined;
        formTarget?: string | undefined;
        frameBorder?: string | number | undefined;
        headers?: string | undefined;
        height?: string | number | undefined;
        high?: number | undefined;
        href?: string | undefined;
        hrefLang?: string | undefined;
        htmlFor?: string | undefined;
        httpEquiv?: string | undefined;
        integrity?: string | undefined;
        keyParams?: string | undefined;
        keyType?: string | undefined;
        kind?: string | undefined;
        label?: string | undefined;
        list?: string | undefined;
        loop?: boolean | undefined;
        low?: number | undefined;
        manifest?: string | undefined;
        marginHeight?: number | undefined;
        marginWidth?: number | undefined;
        max?: string | number | undefined;
        maxLength?: number | undefined;
        media?: string | undefined;
        mediaGroup?: string | undefined;
        method?: string | undefined;
        min?: string | number | undefined;
        minLength?: number | undefined;
        multiple?: boolean | undefined;
        muted?: boolean | undefined;
        name?: string | undefined;
        nonce?: string | undefined;
        noValidate?: boolean | undefined;
        open?: boolean | undefined;
        optimum?: number | undefined;
        pattern?: string | undefined;
        placeholder?: string | undefined;
        playsInline?: boolean | undefined;
        poster?: string | undefined;
        preload?: string | undefined;
        readOnly?: boolean | undefined;
        rel?: string | undefined;
        required?: boolean | undefined;
        reversed?: boolean | undefined;
        rows?: number | undefined;
        rowSpan?: number | undefined;
        sandbox?: string | undefined;
        scope?: string | undefined;
        scoped?: boolean | undefined;
        scrolling?: string | undefined;
        seamless?: boolean | undefined;
        selected?: boolean | undefined;
        shape?: string | undefined;
        size?: number | undefined;
        sizes?: string | undefined;
        span?: number | undefined;
        src?: string | undefined;
        srcDoc?: string | undefined;
        srcLang?: string | undefined;
        srcSet?: string | undefined;
        start?: number | undefined;
        step?: string | number | undefined;
        summary?: string | undefined;
        target?: string | undefined;
        type?: string | undefined;
        useMap?: string | undefined;
        value?: string | number | string[] | undefined;
        width?: string | number | undefined;
        wmode?: string | undefined;
        wrap?: string | undefined;
        defaultChecked?: boolean | undefined;
        defaultValue?: string | string[] | undefined;
        suppressContentEditableWarning?: boolean | undefined;
        accessKey?: string | undefined;
        className?: string | undefined;
        contentEditable?: boolean | undefined;
        contextMenu?: string | undefined;
        dir?: string | undefined;
        draggable?: boolean | undefined;
        hidden?: boolean | undefined;
        id?: string | undefined;
        lang?: string | undefined;
        slot?: string | undefined;
        spellCheck?: boolean | undefined;
        tabIndex?: number | undefined;
        title?: string | undefined;
        inputMode?: string | undefined;
        is?: string | undefined;
        radioGroup?: string | undefined;
        role?: string | undefined;
        about?: string | undefined;
        datatype?: string | undefined;
        inlist?: any;
        prefix?: string | undefined;
        property?: string | undefined;
        resource?: string | undefined;
        typeof?: string | undefined;
        vocab?: string | undefined;
        autoCapitalize?: string | undefined;
        autoCorrect?: string | undefined;
        autoSave?: string | undefined;
        color?: string | undefined;
        itemProp?: string | undefined;
        itemScope?: boolean | undefined;
        itemType?: string | undefined;
        itemID?: string | undefined;
        itemRef?: string | undefined;
        results?: number | undefined;
        security?: string | undefined;
        unselectable?: boolean | undefined;
        dangerouslySetInnerHTML?: {
            __html: string;
        } | undefined;
        onCopy?: ((event: React.ClipboardEvent<HTMLTextAreaElement>) => void) | undefined;
        onCopyCapture?: ((event: React.ClipboardEvent<HTMLTextAreaElement>) => void) | undefined;
        onCut?: ((event: React.ClipboardEvent<HTMLTextAreaElement>) => void) | undefined;
        onCutCapture?: ((event: React.ClipboardEvent<HTMLTextAreaElement>) => void) | undefined;
        onPaste?: ((event: React.ClipboardEvent<HTMLTextAreaElement>) => void) | undefined;
        onPasteCapture?: ((event: React.ClipboardEvent<HTMLTextAreaElement>) => void) | undefined;
        onCompositionEnd?: ((event: React.CompositionEvent<HTMLTextAreaElement>) => void) | undefined;
        onCompositionEndCapture?: ((event: React.CompositionEvent<HTMLTextAreaElement>) => void) | undefined;
        onCompositionStart?: ((event: React.CompositionEvent<HTMLTextAreaElement>) => void) | undefined;
        onCompositionStartCapture?: ((event: React.CompositionEvent<HTMLTextAreaElement>) => void) | undefined;
        onCompositionUpdate?: ((event: React.CompositionEvent<HTMLTextAreaElement>) => void) | undefined;
        onCompositionUpdateCapture?: ((event: React.CompositionEvent<HTMLTextAreaElement>) => void) | undefined;
        onFocus?: ((event: React.FocusEvent<HTMLTextAreaElement>) => void) | undefined;
        onFocusCapture?: ((event: React.FocusEvent<HTMLTextAreaElement>) => void) | undefined;
        onBlur?: ((event: React.FocusEvent<HTMLTextAreaElement>) => void) | undefined;
        onBlurCapture?: ((event: React.FocusEvent<HTMLTextAreaElement>) => void) | undefined;
        onChangeCapture?: ((event: React.FormEvent<HTMLTextAreaElement>) => void) | undefined;
        onInput?: ((event: React.FormEvent<HTMLTextAreaElement>) => void) | undefined;
        onInputCapture?: ((event: React.FormEvent<HTMLTextAreaElement>) => void) | undefined;
        onReset?: ((event: React.FormEvent<HTMLTextAreaElement>) => void) | undefined;
        onResetCapture?: ((event: React.FormEvent<HTMLTextAreaElement>) => void) | undefined;
        onSubmit?: ((event: React.FormEvent<HTMLTextAreaElement>) => void) | undefined;
        onSubmitCapture?: ((event: React.FormEvent<HTMLTextAreaElement>) => void) | undefined;
        onInvalid?: ((event: React.FormEvent<HTMLTextAreaElement>) => void) | undefined;
        onInvalidCapture?: ((event: React.FormEvent<HTMLTextAreaElement>) => void) | undefined;
        onLoad?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onLoadCapture?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onError?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onErrorCapture?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onKeyDown?: ((event: React.KeyboardEvent<HTMLTextAreaElement>) => void) | undefined;
        onKeyDownCapture?: ((event: React.KeyboardEvent<HTMLTextAreaElement>) => void) | undefined;
        onKeyPress?: ((event: React.KeyboardEvent<HTMLTextAreaElement>) => void) | undefined;
        onKeyPressCapture?: ((event: React.KeyboardEvent<HTMLTextAreaElement>) => void) | undefined;
        onKeyUp?: ((event: React.KeyboardEvent<HTMLTextAreaElement>) => void) | undefined;
        onKeyUpCapture?: ((event: React.KeyboardEvent<HTMLTextAreaElement>) => void) | undefined;
        onAbort?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onAbortCapture?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onCanPlay?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onCanPlayCapture?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onCanPlayThrough?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onCanPlayThroughCapture?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onDurationChange?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onDurationChangeCapture?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onEmptied?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onEmptiedCapture?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onEncrypted?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onEncryptedCapture?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onEnded?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onEndedCapture?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onLoadedData?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onLoadedDataCapture?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onLoadedMetadata?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onLoadedMetadataCapture?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onLoadStart?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onLoadStartCapture?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onPause?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onPauseCapture?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onPlay?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onPlayCapture?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onPlaying?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onPlayingCapture?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onProgress?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onProgressCapture?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onRateChange?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onRateChangeCapture?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onSeeked?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onSeekedCapture?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onSeeking?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onSeekingCapture?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onStalled?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onStalledCapture?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onSuspend?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onSuspendCapture?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onTimeUpdate?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onTimeUpdateCapture?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onVolumeChange?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onVolumeChangeCapture?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onWaiting?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onWaitingCapture?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onClick?: ((event: React.MouseEvent<HTMLTextAreaElement>) => void) | undefined;
        onClickCapture?: ((event: React.MouseEvent<HTMLTextAreaElement>) => void) | undefined;
        onContextMenu?: ((event: React.MouseEvent<HTMLTextAreaElement>) => void) | undefined;
        onContextMenuCapture?: ((event: React.MouseEvent<HTMLTextAreaElement>) => void) | undefined;
        onDoubleClick?: ((event: React.MouseEvent<HTMLTextAreaElement>) => void) | undefined;
        onDoubleClickCapture?: ((event: React.MouseEvent<HTMLTextAreaElement>) => void) | undefined;
        onDrag?: ((event: React.DragEvent<HTMLTextAreaElement>) => void) | undefined;
        onDragCapture?: ((event: React.DragEvent<HTMLTextAreaElement>) => void) | undefined;
        onDragEnd?: ((event: React.DragEvent<HTMLTextAreaElement>) => void) | undefined;
        onDragEndCapture?: ((event: React.DragEvent<HTMLTextAreaElement>) => void) | undefined;
        onDragEnter?: ((event: React.DragEvent<HTMLTextAreaElement>) => void) | undefined;
        onDragEnterCapture?: ((event: React.DragEvent<HTMLTextAreaElement>) => void) | undefined;
        onDragExit?: ((event: React.DragEvent<HTMLTextAreaElement>) => void) | undefined;
        onDragExitCapture?: ((event: React.DragEvent<HTMLTextAreaElement>) => void) | undefined;
        onDragLeave?: ((event: React.DragEvent<HTMLTextAreaElement>) => void) | undefined;
        onDragLeaveCapture?: ((event: React.DragEvent<HTMLTextAreaElement>) => void) | undefined;
        onDragOver?: ((event: React.DragEvent<HTMLTextAreaElement>) => void) | undefined;
        onDragOverCapture?: ((event: React.DragEvent<HTMLTextAreaElement>) => void) | undefined;
        onDragStart?: ((event: React.DragEvent<HTMLTextAreaElement>) => void) | undefined;
        onDragStartCapture?: ((event: React.DragEvent<HTMLTextAreaElement>) => void) | undefined;
        onDrop?: ((event: React.DragEvent<HTMLTextAreaElement>) => void) | undefined;
        onDropCapture?: ((event: React.DragEvent<HTMLTextAreaElement>) => void) | undefined;
        onMouseDown?: ((event: React.MouseEvent<HTMLTextAreaElement>) => void) | undefined;
        onMouseDownCapture?: ((event: React.MouseEvent<HTMLTextAreaElement>) => void) | undefined;
        onMouseEnter?: ((event: React.MouseEvent<HTMLTextAreaElement>) => void) | undefined;
        onMouseLeave?: ((event: React.MouseEvent<HTMLTextAreaElement>) => void) | undefined;
        onMouseMove?: ((event: React.MouseEvent<HTMLTextAreaElement>) => void) | undefined;
        onMouseMoveCapture?: ((event: React.MouseEvent<HTMLTextAreaElement>) => void) | undefined;
        onMouseOut?: ((event: React.MouseEvent<HTMLTextAreaElement>) => void) | undefined;
        onMouseOutCapture?: ((event: React.MouseEvent<HTMLTextAreaElement>) => void) | undefined;
        onMouseOver?: ((event: React.MouseEvent<HTMLTextAreaElement>) => void) | undefined;
        onMouseOverCapture?: ((event: React.MouseEvent<HTMLTextAreaElement>) => void) | undefined;
        onMouseUp?: ((event: React.MouseEvent<HTMLTextAreaElement>) => void) | undefined;
        onMouseUpCapture?: ((event: React.MouseEvent<HTMLTextAreaElement>) => void) | undefined;
        onSelect?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onSelectCapture?: ((event: React.SyntheticEvent<HTMLTextAreaElement>) => void) | undefined;
        onTouchCancel?: ((event: React.TouchEvent<HTMLTextAreaElement>) => void) | undefined;
        onTouchCancelCapture?: ((event: React.TouchEvent<HTMLTextAreaElement>) => void) | undefined;
        onTouchEnd?: ((event: React.TouchEvent<HTMLTextAreaElement>) => void) | undefined;
        onTouchEndCapture?: ((event: React.TouchEvent<HTMLTextAreaElement>) => void) | undefined;
        onTouchMove?: ((event: React.TouchEvent<HTMLTextAreaElement>) => void) | undefined;
        onTouchMoveCapture?: ((event: React.TouchEvent<HTMLTextAreaElement>) => void) | undefined;
        onTouchStart?: ((event: React.TouchEvent<HTMLTextAreaElement>) => void) | undefined;
        onTouchStartCapture?: ((event: React.TouchEvent<HTMLTextAreaElement>) => void) | undefined;
        onScroll?: ((event: React.UIEvent<HTMLTextAreaElement>) => void) | undefined;
        onScrollCapture?: ((event: React.UIEvent<HTMLTextAreaElement>) => void) | undefined;
        onWheel?: ((event: React.WheelEvent<HTMLTextAreaElement>) => void) | undefined;
        onWheelCapture?: ((event: React.WheelEvent<HTMLTextAreaElement>) => void) | undefined;
        onAnimationStart?: ((event: React.AnimationEvent<HTMLTextAreaElement>) => void) | undefined;
        onAnimationStartCapture?: ((event: React.AnimationEvent<HTMLTextAreaElement>) => void) | undefined;
        onAnimationEnd?: ((event: React.AnimationEvent<HTMLTextAreaElement>) => void) | undefined;
        onAnimationEndCapture?: ((event: React.AnimationEvent<HTMLTextAreaElement>) => void) | undefined;
        onAnimationIteration?: ((event: React.AnimationEvent<HTMLTextAreaElement>) => void) | undefined;
        onAnimationIterationCapture?: ((event: React.AnimationEvent<HTMLTextAreaElement>) => void) | undefined;
        onTransitionEnd?: ((event: React.TransitionEvent<HTMLTextAreaElement>) => void) | undefined;
        onTransitionEndCapture?: ((event: React.TransitionEvent<HTMLTextAreaElement>) => void) | undefined;
        ref?: string | ((instance: HTMLTextAreaElement | null) => any) | undefined;
        key?: string | number | undefined;
    };
    render(): JSX.Element;
    componentDidUpdate(): void;
}
