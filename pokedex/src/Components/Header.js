import React, { useContext } from 'react';
import { goToHome } from '../Router/coordinator';
import { useHistory } from 'react-router';
import icon from '../img/icon.png'
import pokemon from '../img/pokemon.webp'
import { HomeIcon, ContainerHeader } from '../Style/HeaderStyles'
import GlobalStateContext from "../Global/GlobalStateContext";
import useForm from '../hook/useForm'

export function Header() {
    const history = useHistory()
    let { requests } = useContext(GlobalStateContext)
    // const initialForm = { name: ''}
    // const [form, onChange, resetForm] = useForm(initialForm)
    
    // const sendForm = (e) => {
    //     e.preventDefault()
    //     filterName()
    //     resetForm()
    // }

    // const filterName = () => {

    //     let filtered = post

    //         .filter((post) => {
    //             if (form.inputSearch) {
    //                 return (form.inputSearch && post && post.username && post.username.toLowerCase().includes(form.inputSearch.toLowerCase()))
    //             } else {
    //                 return (post)
    //             }
    //         })

    //         .sort((x, y) => {
    //             if (form.order === 'Posts recentes') {
    //                 return y.createdAt - x.createdAt
    //             } else if (form.order === 'Posts antigos') {
    //                 return x.createdAt - y.createdAt
    //             } else if (form.order === 'Posts mais votados') {
    //                 return y.votesCount - x.votesCount
    //             } else if (form.order === 'Posts menos votados') {
    //                 return x.votesCount - y.votesCount
    //             }
    //         })

    //     return (
    //         setFilter(filtered)
    //     )
    // }

    return (
        <ContainerHeader>

            <HomeIcon src={icon} onClick={() => goToHome(history)}></HomeIcon>
            <HomeIcon pokemon src={pokemon}></HomeIcon>
            {/* <>
                <ContainerForm button option onSubmit={sendForm}>

                    <InputSearch
                        type={"text"}
                        name={"name"}
                        value={form.name}
                        placeholder={"Pesquisa por nome "}
                        onChange={onChange}
                    >
                    </InputSearch>
                    <ButtonFilter>🔍</ButtonFilter>
                </ContainerForm>
            </> */}
            {requests.buttonNav(history.location.pathname)}

        </ContainerHeader>
    )
}

export default Header