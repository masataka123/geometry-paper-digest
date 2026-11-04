---
layout: paper
title: Asymptotic geometry of non-abelian Hodge theory and Riemann--Hilbert correspondence, rank three $\widetilde{E}_6$ case
title_ja: 3点穴あき球面の階数3非可換Hodge対応と幾何学的P=W
authors: Miklos Eper, Szilard Szabo
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We prove the Geometric P=W conjecture in rank 3 on the three-punctured sphere. We describe the topology at infinity of the related character variety. We use asymptotic abelianization of harmonic bundles away from the ramification divisor and an equivariant approach near the branch points to find the WKB (also known as Liouville--Green or phase-integral) expansion of the involved maps. We analyze the Stokes phenomenon governing their behavior.
topic: algebraic-geometry
tags:
- higgs-nonabelian-hodge
- hodge-theory
- moduli
arxiv_id: 2407.20638v3
arxiv_url: https://arxiv.org/abs/2407.20638
arxiv_submitted: '2024-07-30'
arxiv_updated: '2026-10-30'
summary: 3点穴あき球面の階数3の設定で、非可換Hodge対応とRiemann–Hilbert対応の無限遠挙動を調べ、幾何学的P=W予想を証明する。指標多様体の境界双対複体とHitchin基底を、WKB漸近解析によって結びつける。
abstract_en: We prove the Geometric P=W conjecture in rank 3 on the three-punctured sphere. We describe the topology at infinity of the related character variety. We use asymptotic abelianization of harmonic bundles away from the ramification divisor and an equivariant approach near the branch points to find the WKB (also known as Liouville--Green or phase-integral) expansion of the involved maps. We analyze the Stokes phenomenon governing their behavior.
summary_en: ''
abstract_ja: 拡大根系Ẽ6に対応する階数3・3点対数特異点の設定で、幾何学的P=W予想を扱う。関連する指標多様体のコンパクト化境界はI1型で、その双対複体は円周のホモトピー型を持つ。調和束の漸近的可換化と分岐点近くの同変解析から座標のWKB挙動を求め、幾何学的P=Wを無条件に証明する。Stokes方向まで同じ漸近式を仮定する別の説明は、追加条件付きの結果として区別される。
abstract_source_url: https://arxiv.org/abs/2407.20638
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2407.20638v3](https://arxiv.org/abs/2407.20638)
- **著者:** Miklos Eper, Szilard Szabo
- **初回投稿日:** 2024-07-30
- **最終更新日:** 2026-10-30
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

非可換Hodge対応は、Higgs束のDolbeaultモジュライと基本群表現のBettiモジュライを微分同相で結ぶ。しかし両者の代数構造は異なり、その対応は超越的である。本論文は、3点穴あき球面の階数3という具体的な場合に、この写像が無限遠でどう振る舞うかを調べる。

主結果は幾何学的P=W予想の証明である。これはコホモロジーのフィルトレーションの一致だけでなく、Hitchin基底の無限遠と指標多様体のコンパクト化境界を、対応写像を介してホモトピー的に結びつける主張である。

証明にはWKB解析とStokes現象が現れる。著者らは主定理の無条件の証明と、Stokes方向にも漸近式が延長するという追加仮定を使った別の説明を区別している。後者の仮定を主定理全体の仮定と混同しない。

## 背景と問題設定

対象は、3つの対数特異点を持つ $\mathbb{CP}^1$ 上の階数3 Higgs束のモジュライ $M\_{\mathrm{Dol}}(\alpha)$ と、対応する $SL(3,\mathbb C)$ 指標多様体 $M\_B(c)$ である。序論は拡大根系 $\widetilde E\_6$ の場合として扱い、パラメータの具体的な指定をSection 2.2に委ねる。任意の局所モノドロミー条件への一律の一般化とは読まない。

対応写像は

$$
\psi=\operatorname{RH}\circ\operatorname{NAHC}
$$

であり、Hitchin写像 $H$ の基底はこの場合1次元となる。通常のP=Wはperverse Lerayフィルトレーションと混合Hodge構造の重みを比較するのに対し、幾何学的版は無限遠の写像を比較する。

## 主結果

### 幾何学的P=W（Theorem 1.1）

本論文の階数3 tame調和束・3点穴あき球面の設定で、幾何学的P=W予想が成り立つ。十分大きい $R$ に対し、対応写像で結ばれた両モジュライの無限遠部分から、Hitchin基底の外部と境界双対複体への写像がホモトピー可換になる。

境界の双対複体を $|\mathcal D\partial M\_B|$、Simpsonの写像を $S$ とすれば、内容は

$$
M\_{\mathrm{Dol}}\setminus H^{-1}(B\_R(0))
\xrightarrow{\ \psi\ }
M\_B\setminus\psi(H^{-1}(B\_R(0)))
$$

の下で、$H$ と $S$ が、底側の写像

$$
\mathcal H\setminus B\_R(0)\longrightarrow|\mathcal D\partial M\_B|
$$

とホモトピーの意味で整合することである。これは対応写像が代数的同型になるという主張ではない。

### コンパクト化境界の位相（Theorem 1.2）

関連する $GL(3,\mathbb C)$ 指標多様体は、$I\_1$ 型曲線を境界とする滑らかなコンパクト化を持ち、そのnerve complexの実現は

$$
|\mathcal D\partial M\_B|\simeq S^1
$$

というホモトピー型を持つ。序論はこの場合の $GL(3)$ と $SL(3)$ の記述が対応することを説明する。境界に関する本質的に同じ結果は先行研究にもあり、本論文は独立した証明を与えると位置づける。

## 証明の見取り図

分岐点から離れた場所では調和束の漸近的可換化を使い、分岐点近くでは同変的な解析を用いる。階数2で利用された特別な局所モデルに依存する方法を置き換え、平行移動行列とtrace座標のWKB展開へ進む。

Hitchin基底の無限遠は扇形に分かれ、各領域で異なる指数項が支配的になる。指数増大の係数はスペクトル曲線上のLiouville形式の周期、位相はスペクトル層のholonomyで記述される。これを境界の円周への写像と比較する。

Section 6.3の主定理の証明は無条件と明記されている。一方、Section 6.4ではStokes方向にも同じ漸近式が成り立つというAssumption 2を使い、より全体的な漸近像を説明する。この追加仮定は未確認の一般化を断定するためには使わない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2407.20638)
- **Introduction:** [PDF](https://arxiv.org/pdf/2407.20638v3) — Section 1, pp. 1–6
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2; 式(1); Assumption 2を用いる別証明への言及
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2407.20638v3
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
