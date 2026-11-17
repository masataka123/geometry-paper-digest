---
layout: paper
title: Deligne pairing isomorphisms for projective duals and higher-rank associated hypersurfaces
title_ja: 射影双対と高次associated hypersurfaceのDeligne pairing表示
authors: Rémi Reboulet
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: Given a family π:X\to S of complex projective varieties, polarised by a (sufficiently) relatively very ample L, we give an isomorphism between a Deligne pairing involving higher relative cotangent Chern classes, and the relative projective dual line X^\vee(L). As a consequence, we obtain explicit Deligne pairing isomorphisms for all of the higher associated hypersurfaces of Gelfand--Kapranov--Zelevinsky, including mixed polarisations, as well as higher-rank versions of such hypersurfaces involving sufficiently positive vector bundles.
topic: algebraic-geometry
tags:
- chern-classes
- vector-bundles-sheaves
- positivity
arxiv_id: 2611.20077v1
arxiv_url: https://arxiv.org/abs/2611.20077
arxiv_submitted: '2026-11-15'
arxiv_updated: '2026-11-15'
summary: 族の射影双対を定義する線束を、相対余接束の高次Chern類を含むDeligne pairingで表す。既知のChow線・hyperdiscriminant線の表示を統一し、高次associated hypersurfaceや高階数ベクトル束のresultantへ拡張する。
abstract_en: Given a family π:X\to S of complex projective varieties, polarised by a (sufficiently) relatively very ample L, we give an isomorphism between a Deligne pairing involving higher relative cotangent Chern classes, and the relative projective dual line X^\vee(L). As a consequence, we obtain explicit Deligne pairing isomorphisms for all of the higher associated hypersurfaces of Gelfand--Kapranov--Zelevinsky, including mixed polarisations, as well as higher-rank versions of such hypersurfaces involving sufficiently positive vector bundles.
summary_en: ''
abstract_ja: 十分に相対的very ampleな線束で偏極された複素射影多様体の族について、相対射影双対を定義する線束と、高次の相対余接Chern類を用いたDeligne pairingの間に同型を構成する。その帰結として、Gelfand–Kapranov–Zelevinskyの高次associated hypersurface全般、混合偏極の場合、および十分に正なベクトル束を用いた高階数版に明示的なDeligne pairing表示を与える。
abstract_source_url: https://arxiv.org/abs/2611.20077
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.20077v1](https://arxiv.org/abs/2611.20077)
- **著者:** Rémi Reboulet
- **初回投稿日:** 2026-11-15
- **最終更新日:** 2026-11-15
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

Chow線や判別式を定義する線束は、族の幾何を底空間上の線束へ圧縮する。Deligne pairingも交点理論から底上の線束を作るため、両者の同型は不変量の比較に有用である。

本論文は、相対射影双対を定義する線束を、高次Chern類を含むDeligne pairingとして直接記述する。この一つの同型を出発点として、Chow線やhyperdiscriminantに関する既知の構成を、より高いassociated hypersurfaceへ広げる。

さらに線束の組だけでなく、十分に正な高階数ベクトル束の組から作るresultantにも同じ考えを適用する。結論は次数の一致にとどまらず、自然な線束同型を与える点に意味がある。

## 背景と問題設定

ZhangはChow線と最高次のDeligne pairingを結び付け、Kapadiaはhyperdiscriminant線に関する拡張を与えた。IntroductionはこれらのK安定性研究における動機にも触れる。本論文は個別の構成を相対射影双対の問題へまとめる。

$\pi:X\to S$ は論文の仮定 $(H\_n)$ を満たす族とし、$L$ は十分に相対的very ampleな線束とする。定理で参照される $(H\_n)$ の意味のみ直後の定義で確認すると、滑らか・平坦・射影的・有限表示で、純相対次元 $n$ という条件である。$T\_{X/S}^{\vee}$ は相対余接束を表す。

## 主結果

### 射影双対を定義する線束（Theorem A）

相対射影双対 $X^{\vee}(L)$ を定義する線束を $\mathcal A$ とすると、標準的な同型

$$
\mathcal A\simeq
\left\langle c\_1(L)\cdot c\_n(T\_{X/S}^{\vee}\otimes L)\right\rangle\_{X/S}
$$

が存在する。これはIntroductionの式(0.1)である。十分な相対的正値性を課した族の主張であり、任意の退化した族や任意の線束へ無条件に適用できるわけではない。

### 高次associated hypersurfaceと高階数版（式(0.2)–(0.3)）

Introductionでは、上の定理を射影束の超平面束に適用することで、GKZの高次associated hypersurfaceを定義する線束に

$$
\mathcal A\_{n+1-r}=
\left\langle c\_1(L)^r\cdot c\_{n+1-r}(T\_{X/S}^{\vee}\otimes L)\right\rangle\_{X/S}
$$

という表示を得ると述べる。また十分に正なベクトル束 $E\_1,\ldots,E\_r$ に対し、階数の和が $n+1$ となる設定で、対応する線束は

$$
\mathcal A=
\left\langle\prod\_{j=1}^{r}c\_{\operatorname{rk}(E\_j)}(E\_j)\right\rangle\_{X/S}
$$

と表される。これらの応用の精密な設定は後続節へ委ねられているため、ここではIntroductionに示された式と範囲を紹介する。

## 証明の見取り図

二つの異なる切断で補助的なpairingを評価し、それらが定義する双有理な超曲面を比較する。Deligne pairingの標準的な性質を使って評価を結び、射影双対の線束同型を得る。正なベクトル束の直和を射影化し、その超平面束へ主定理を適用することで、高次・高階数の構成を同じ枠組みに入れる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.20077)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.20077v1) — Introduction, pp. 1–2（仮定(H\_n)の意味のみ直後のDefinition 1.1で確認）
- **Introduction中で言及された主要結果:** Theorem A、式(0.1)–(0.3)
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.20077v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
