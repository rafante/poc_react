import React from 'react';
import { tsThisType } from '@babel/types';
const axios = require('axios');

type Material = {
    descricao: String
}


class Dashboard extends React.Component {
    state = {
        materiais: []
    }

    setaMateriais(mats: any) {
        this.setState({
            materiais: mats
        });
    }

    acessaServer(dash: Dashboard) {
        axios.get('/material').catch(function (err: any) {
            alert(err);
        }).then(function (response: any) {
            if (response.status == 200 && response.data) {
                let materiais = response.data;
                dash.setaMateriais(materiais);
            }
        });
    }

    corpo(estado: any) {
        if (estado && estado.materiais && estado.materiais.length) {
            return <h1>Tem materiais</h1>
        } else {
            return <button onClick={() => this.acessaServer(this)}>Clica aqui</button>;
        }
    }

    render() {
        return (
            <div>
                {this.corpo(this.state)}
            </div>
        );
    }
}

export default Dashboard;