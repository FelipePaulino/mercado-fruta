import * as S from './styles'

export default function Button({label, onClick, disabled}) {
    return (
        <S.Content onClick={onClick} disabled={disabled} >
            {label}
        </S.Content>
    )
}
