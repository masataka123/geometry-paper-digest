---
layout: paper
title: Moduli space of irregular singular $λ$-connections and the relative symplectic form
title_ja: 分岐不確定特異点を持つλ接続のモジュライと相対シンプレクティック形式
authors: Michi-aki Inaba, Arata Komyo
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We study the moduli space of $\lambda$-connections with ramified singularities on a smooth projective curve $X$. We construct a quasi-projective relative moduli scheme $M^{\alpha}_{\mathrm{Hod}} \to \Lambda$ of $\alpha$-stable $\lambda$-connections over a base parameter space $\Lambda$. This moduli space connects the irregular de Rham moduli space ($\lambda=1$) and the irregular Dolbeault moduli space of Higgs bundles equipped with non-zero irregular local exponents ($\lambda=0$). Furthermore, we show that $M^{\alpha}_{\mathrm{Hod}}$ is smooth over $\Lambda$ and carries a canonical relative symplectic form $\omega_{M^{\alpha}_{\mathrm{Hod}}/\Lambda}$, yielding a natural Poisson structure on the total space.
topic: algebraic-geometry
tags:
- moduli
- higgs-nonabelian-hodge
- vector-bundles-sheaves
- symplectic-contact-geometry
- stability
arxiv_id: 2610.40352v1
arxiv_url: https://arxiv.org/abs/2610.40352
arxiv_submitted: '2026-10-29'
arxiv_updated: '2026-10-29'
summary: 分岐する不確定特異点を許すλ接続を一つの相対モジュライ空間で扱う。接続とHiggs束を結ぶ準射影な族を構成し、その滑らかさ、次元、相対シンプレクティック形式を示す。
abstract_en: We study the moduli space of $\lambda$-connections with ramified singularities on a smooth projective curve $X$. We construct a quasi-projective relative moduli scheme $M^{\alpha}_{\mathrm{Hod}} \to \Lambda$ of $\alpha$-stable $\lambda$-connections over a base parameter space $\Lambda$. This moduli space connects the irregular de Rham moduli space ($\lambda=1$) and the irregular Dolbeault moduli space of Higgs bundles equipped with non-zero irregular local exponents ($\lambda=0$). Furthermore, we show that $M^{\alpha}_{\mathrm{Hod}}$ is smooth over $\Lambda$ and carries a canonical relative symplectic form $\omega_{M^{\alpha}_{\mathrm{Hod}}/\Lambda}$, yielding a natural Poisson structure on the total space.
summary_en: ''
abstract_ja: 滑らかな射影曲線上で分岐特異点を持つλ接続のモジュライを研究する。パラメータ空間Λ上にα安定なλ接続の準射影相対モジュライスキームを構成し、λ=1の不確定de Rhamモジュライと、λ=0で非零の不確定局所指数を許すHiggs束のモジュライを結ぶ。さらに、この族がΛ上滑らかであり、標準的な相対シンプレクティック形式を持つことを示す。この形式から全空間に自然なPoisson構造が得られる。
abstract_source_url: https://arxiv.org/abs/2610.40352
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.40352v1](https://arxiv.org/abs/2610.40352)
- **著者:** Michi-aki Inaba, Arata Komyo
- **初回投稿日:** 2026-10-29
- **最終更新日:** 2026-10-29
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

接続とHiggs束は非可換Hodge理論の二つの中心的対象であり、$\lambda$ 接続はそれらを一つのパラメータで結ぶ。本論文は、この枠組みを分岐する不確定特異点を持つ場合へ広げる。

著者らは、局所指数と $\lambda$ を動かすパラメータ空間上に、安定な対象の準射影相対モジュライスキームを構成する。$\lambda=1$ では接続、$\lambda=0$ ではHiggs束となり、後者でも局所指数をゼロに固定しないことが特徴である。

この族は滑らかで、ファイバーの次元が具体的に計算でき、相対シンプレクティック形式を持つ。個々の接続・Higgs束のモジュライ空間の存在だけでなく、それらを形式的局所構造と両立する一つの族として結びつける点に新しさがある。Painlevé方程式に関係するコンパクト化などは動機・将来課題として区別される。

## 背景と問題設定

$X$ を種数 $g$ の滑らかな複素射影曲線、$D$ を有効因子、$E$ を階数 $r\geq2$、次数 $d$ のベクトル束とする。$\lambda$ 接続は

$$
\nabla:E\longrightarrow E\otimes\Omega\_X^1(D),\qquad
\nabla(fa)=\lambda a\otimes df+f\nabla(a)
$$

を満たす $\mathbb C$ 線形写像である。$\lambda\ne0$ なら $\lambda^{-1}\nabla$ は接続、$\lambda=0$ ならHiggs場になる。

局所指数は一般的な分岐指数という条件を満たし、分岐ブロックに応じたフレームと放物構造を固定する。局所Laurent級数体上の形式分類だけでは、極因子上の構造を十分に記述できないことが構成上の課題である。Introductionは、放物フレームから形式データを復元する仕組みを用いてこの差を扱う。

## 主結果

### 相対Hodgeモジュライの存在（Theorem 1.3）

一般的な分岐局所指数と $\lambda$ からなるパラメータ空間 $\Lambda$ 上に、放物フレームを備えた $\alpha$ 安定な $\lambda$ 接続の相対粗モジュライスキーム

$$
\pi:M\_{\mathrm{Hod}}^\alpha\longrightarrow\Lambda
$$

が存在し、$\Lambda$ 上準射影である。$(1,\nu)$ 上のファイバーは指定したフレーム付き接続の $M\_{\mathrm{dR}}^\alpha(\nu)$、$(0,\mu)$ 上のファイバーはフレーム付きHiggs束の $M\_{\mathrm{Higgs}}^\alpha(\mu)$ である。

局所指数は階数の分割、一般性条件、Fuchs関係を満たすデータであり、任意の特異型を無条件に含める主張ではない。$\lambda=0$ で局所指数をゼロに限定しない定式化が、不確定特異点を伴うHodge側を扱う上で重要となる。

### 滑らかさ・次元・相対形式（Theorem 1.4）

このモジュライ空間は $\Lambda$ 上滑らかで、各ファイバーの次元は

$$
\dim M\_{\mathrm{Hod}}^\alpha(\lambda,\nu)
=2r^2(g-1)+2+r(r-1)\deg D
$$

である。さらに相対シンプレクティック形式

$$
\omega\_{M\_{\mathrm{Hod}}^\alpha/\Lambda}
\in H^0\bigl(M\_{\mathrm{Hod}}^\alpha,\Omega^2\_{M\_{\mathrm{Hod}}^\alpha/\Lambda}\bigr)
$$

を持つ。Introductionはこの形式が全空間に標準的なPoisson構造を与えることも説明する。相対形式はファイバー方向の非退化な閉2形式であり、全空間自体が同じ次元のシンプレクティック多様体になるという意味ではない。

## 証明の見取り図

第2節でフレーム構造と分岐構造の対応を整え、正規化により放物フレームへ移る。第3節ではその構造を用いて代数的モジュライを構成する。

第4節の方針は、フレームに付随する線形自己準同型の分解から変形を支配する複体を作ることである。その1次超コホモロジーがファイバーの接空間に対応し、自然な非退化双線形対を持つことから滑らかさ、次元、相対形式を得る。閉性には、パラメータを動かして非分岐の不確定特異点へ展開し、既知の場合へ還元する議論を用いる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.40352)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.40352v1) — Section 1.1–1.3, pp. 1–6
- **Introduction中で言及された主要結果:** Theorems 1.3, 1.4; Introductionで説明されるCorollary 4.7
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.40352v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
