import { renderHook } from "@testing-library/react";
import { useEffect, useState } from "react";

test('Deve testar os Hooks da aplicação', () => {
    const { result } = renderHook(() => {
        const [nome, setNome] = useState('');
        useEffect(() => {
            setNome('Fabiano')
        }, [])
        return nome;
    });
    expect(result.current).toBe('Fabiano');
})