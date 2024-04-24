import { memo } from "react";
import { routes } from "@/router";
import { Text } from "@/theme";

export const NotFound = memo(() => {

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexDirection: 'column',
            backgroundColor: '#f0f0f0',
            color: '#333',
            fontFamily: 'Arial, sans-serif',
            fontSize: '24px',
            textAlign: 'center',
            padding: '20px'

        }}>
            <Text typo="heading1" style={{ fontSize: '48px', marginBottom: '20px' }}>404</Text>
            <Text typo="paragraph">Oops! La page que vous cherchez n'existe pas.</Text>
            <Text typo="paragraph"><a {...routes.home().link} style={{ marginTop: '20px', color: '#0077cc', textDecoration: 'none' }}>Acceuil</a></Text>
        </div>
    );
});