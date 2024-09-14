const MessagesIcon = ({ isActive }) => {
    const fillColor = isActive ? "#2281E3" : "";
    const secondaryFillColor = isActive ? "#2281E3" : "#9B9B9B";

    return (
        <svg
            width="26"
            height="25"
            viewBox="0 0 26 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.8053 5.08757C5.8053 2.76225 7.69035 0.877197 10.0157 0.877197H18.6703C21.8999 0.877197 24.5181 3.49532 24.5181 6.72494V9.2487C24.5181 11.0845 23.0299 12.5727 21.1941 12.5727C21.0921 12.5727 21.0086 12.4911 21.0035 12.3892C20.97 11.722 20.7463 9.38573 19.2551 7.89449C17.266 5.90539 14.3124 5.55539 11.4994 5.55539H6.27312C6.01475 5.55539 5.8053 5.34594 5.8053 5.08757Z"
                fill={fillColor}
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.92822 5.08753C4.92822 2.27777 7.20599 0 10.0158 0H18.6704C22.3845 0 25.3953 3.01084 25.3953 6.7249V9.24866C25.3953 11.5689 23.5144 13.4498 21.1942 13.4498C20.6114 13.4498 20.1554 12.9882 20.1275 12.4332C20.1128 12.1403 20.0548 11.4616 19.8333 10.6941C19.6101 9.92094 19.2381 9.11788 18.6349 8.5147C16.918 6.79773 14.2977 6.43251 11.4994 6.43251H6.2732C5.53039 6.43251 4.92822 5.83034 4.92822 5.08753ZM6.70743 4.67819H11.4994C14.3272 4.67819 17.6142 5.01298 19.8754 7.2742C20.7635 8.16226 21.249 9.27298 21.5188 10.2076C21.6706 10.7333 21.7595 11.2224 21.8118 11.6169C22.8641 11.3432 23.641 10.3867 23.641 9.24866V6.7249C23.641 3.97973 21.4156 1.75432 18.6704 1.75432H10.0158C8.31346 1.75432 6.90921 3.03042 6.70743 4.67819Z"
                fill={secondaryFillColor}
            />
            <path
                d="M1.1272 12.6561C1.1272 8.73445 4.30635 5.5553 8.22802 5.5553H13.9087C17.8304 5.5553 21.0095 8.73445 21.0095 12.6561C21.0095 16.5778 17.8304 19.757 13.9087 19.757H12.7035C12.5659 19.757 12.4338 19.8116 12.3365 19.909L8.30072 23.9448C7.88134 24.3641 7.17606 23.9648 7.31991 23.3894L8.10038 20.2675C8.16522 20.0082 7.96907 19.757 7.70174 19.757C4.07072 19.757 1.1272 16.8134 1.1272 13.1824V12.6561Z"
                fill={fillColor}
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.25 12.6562C0.25 8.25009 3.82187 4.67822 8.22799 4.67822H13.9087C18.3148 4.67822 21.8866 8.25009 21.8866 12.6562C21.8866 17.0623 18.3148 20.6342 13.9087 20.6342H12.8518L8.92093 24.5651C7.87248 25.6135 6.10928 24.6152 6.4689 23.1768L7.11032 20.6111C3.27133 20.3097 0.25 17.0989 0.25 13.1825V12.6562ZM8.22799 6.43254C4.79075 6.43254 2.00432 9.21898 2.00432 12.6562V13.1825C2.00432 16.3291 4.55513 18.8799 7.70171 18.8799C8.53969 18.8799 9.15456 19.6674 8.95132 20.4804L8.42686 22.5782L11.7162 19.2888C11.978 19.027 12.3332 18.8799 12.7035 18.8799H13.9087C17.3459 18.8799 20.1323 16.0934 20.1323 12.6562C20.1323 9.21898 17.3459 6.43254 13.9087 6.43254H8.22799Z"
                fill={secondaryFillColor}
            />
        </svg>
    );
};

export default MessagesIcon;