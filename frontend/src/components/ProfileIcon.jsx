const ProfileIcon = ({ isActive }) => {
    const fillColor = isActive ? "#2281E3" : "";
    const secondaryFillColor = isActive ? "#2281E3" : "#9B9B9B";

    return (
        <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16.9978 6.09851C16.9978 8.96504 14.674 11.2888 11.8075 11.2888C8.94092 11.2888 6.61714 8.96504 6.61714 6.09851C6.61714 3.23198 8.94092 0.908203 11.8075 0.908203C14.674 0.908203 16.9978 3.23198 16.9978 6.09851Z"
                fill={fillColor}
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.8075 1.81661C9.44257 1.81661 7.52545 3.73373 7.52545 6.09862C7.52545 8.4635 9.44257 10.3806 11.8075 10.3806C14.1723 10.3806 16.0895 8.4635 16.0895 6.09862C16.0895 3.73373 14.1723 1.81661 11.8075 1.81661ZM5.70884 6.09862C5.70884 2.73044 8.43928 0 11.8075 0C15.1756 0 17.9061 2.73044 17.9061 6.09862C17.9061 9.46679 15.1756 12.1972 11.8075 12.1972C8.43928 12.1972 5.70884 9.46679 5.70884 6.09862Z"
                fill={secondaryFillColor}
            />
            <path
                d="M23.3997 24.0919H0.908302C0.908302 21.2084 3.15744 15.4414 12.154 15.4414C21.1505 15.4414 23.3997 21.2084 23.3997 24.0919Z"
                fill={fillColor}
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.4943 18.0643C4.38023 16.0494 7.44742 14.5327 12.154 14.5327C16.8605 14.5327 19.9277 16.0494 21.8137 18.0643C23.6758 20.0538 24.308 22.4467 24.308 24.0915C24.308 24.5932 23.9013 24.9998 23.3997 24.9998H0.908305C0.406662 24.9998 0 24.5932 0 24.0915C0 22.4467 0.632127 20.0538 2.4943 18.0643ZM1.89385 23.1832H22.4141C22.2251 22.0173 21.6661 20.565 20.4874 19.3057C18.9996 17.7162 16.444 16.3493 12.154 16.3493C7.864 16.3493 5.30835 17.7162 3.82058 19.3057C2.64186 20.565 2.08287 22.0173 1.89385 23.1832Z"
                fill={secondaryFillColor}
            />
        </svg>
    );
};

export default ProfileIcon;
