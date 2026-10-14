---
layout: paper
title: Dolbeault Cohomology Growth under Curvature Rank Bounds
title_ja: 曲率の最大階数によるDolbeaultコホモロジーの増大評価
authors: Xiangsen Qin
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CV
arxiv_abstract: Let $L$ be a smooth Hermitian holomorphic line bundle on a compact complex manifold $X$ of dimension $n$, and let $r$ be its maximal curvature rank. For every fixed holomorphic vector bundle $E$, we prove $h^q(X,L^p\otimes E)=O_\varepsilon(p^{r+\varepsilon})$ for every $\varepsilon>0$ and every Dolbeault degree, with the sharp bounds $h^0,h^n=O(p^r)$ at the endpoints. The curvature may have variable rank and arbitrary signature, and no global foliation or K\"ahler assumption is imposed. The all-degree estimate follows from local rescaling and holomorphic restriction estimates that remain uniform across rank changes. An independent maximum-principle argument locates the maximal rank of a section map at a semipositive curvature point; it yields $\kappa(L|_{X_0})\le r$ on each connected component $X_0$ and gives the endpoint bounds.
topic: algebraic-geometry
tags:
- vector-bundles-sheaves
- curvature
arxiv_id: 2610.09295v2
arxiv_url: https://arxiv.org/abs/2610.09295
arxiv_submitted: '2026-10-07'
arxiv_updated: '2026-10-11'
summary: コンパクト複素多様体上の線束の高冪コホモロジーを、滑らかな曲率の最大階数rで評価する。階数一定性・正値性・大域的葉層・Kähler性を仮定せず全次数でO(p^{r+ε})を示し、端の次数では鋭いO(p^r)評価を得る。
abstract_en: Let $L$ be a smooth Hermitian holomorphic line bundle on a compact complex manifold $X$ of dimension $n$, and let $r$ be its maximal curvature rank. For every fixed holomorphic vector bundle $E$, we prove $h^q(X,L^p\otimes E)=O_\varepsilon(p^{r+\varepsilon})$ for every $\varepsilon>0$ and every Dolbeault degree, with the sharp bounds $h^0,h^n=O(p^r)$ at the endpoints. The curvature may have variable rank and arbitrary signature, and no global foliation or K\"ahler assumption is imposed. The all-degree estimate follows from local rescaling and holomorphic restriction estimates that remain uniform across rank changes. An independent maximum-principle argument locates the maximal rank of a section map at a semipositive curvature point; it yields $\kappa(L|_{X_0})\le r$ on each connected component $X_0$ and gives the endpoint bounds.
summary_en: ''
abstract_ja: コンパクト複素多様体上の滑らかなHermitian正則線束について、曲率の最大階数をrとする。固定した正則ベクトル束で捻った高冪のDolbeaultコホモロジーは、任意の正のεに対し全次数でO(p^{r+ε})、零次と最高次ではO(p^r)に抑えられる。曲率の符号や一定階数、大域的な葉層、Kähler性を仮定しない。全次数の評価には局所スケーリングと正則制限の評価を用い、端の評価と小平–飯高次元の制約は独立な最大値原理の議論から得る。
abstract_source_url: https://arxiv.org/abs/2610.09295
license_name: Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
license_url: http://creativecommons.org/licenses/by-sa/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.09295v2](https://arxiv.org/abs/2610.09295)
- **著者:** Xiangsen Qin
- **初回投稿日:** 2026-10-07
- **最終更新日:** 2026-10-11
- **主分類・副分類:** math.AG（主分類）; math.CV
- **ライセンス:** [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](http://creativecommons.org/licenses/by-sa/4.0/)

## 要約

線束の高冪のコホモロジーは、その曲率の正値性や退化と関係する。曲率の最大階数が多様体の次元より小さい場合には、通常の次元による評価より小さい増大次数が期待される。しかし階数が変わる場所では曲率の核が滑らかに延びず、葉層を使う既存の方法をそのまま適用できない。

本論文は、曲率の階数が変化しても全Dolbeault次数で最大階数に任意に近い指数の上限を与える。正値性もKähler性も仮定しないため、符号不定の曲率や非Kähler多様体を含む。従来の葉層を仮定する鋭い結果とは、指数の強さと適用範囲が異なる。

零次と最高次ではεの損失がない評価が得られ、小平–飯高次元も最大曲率階数以下となる。これらは全次数の解析的評価とは別の幾何学的議論による。中間次数で一般にεを取り除く問題は、論文自身が未解決として残している。

## 背景と問題設定

<p>複素次元 $n$ のコンパクト複素多様体 $X$、滑らかなHermitian正則線束 $(L,h)$、固定された正則ベクトル束 $E$ を取る。曲率形式の最大階数を $r=\max_{x\in X}\operatorname{rank}(\Theta_L)_x$ とし、テンソル冪の指数を $p\ge1$ とする。</p>

<p>Demaillyの弱い正則Morse不等式は一般に $O(p^n)$ を与え、$r\lt n$ では最高次曲率積分の消滅により $o(p^n)$ を与える。Boucheの結果は曲率の核に接する滑らかな大域的葉層があれば $O(p^r)$ を与える。一定階数ならその葉層条件を満たすが、階数変化がある一般の場合には保証されない。</p>

## 主結果

### 全次数の増大評価（Theorem A）

任意の正のεについて、

<div>
$$
h^q(X,L^p\otimes E)=O_\varepsilon(p^{r+\varepsilon}),
\qquad0\le q\le n
$$
</div>

が成り立つ。さらに端の次数では

<div>
$$
h^0(X,L^p\otimes E)=O(p^r),\qquad
h^n(X,L^p\otimes E)=O(p^r)
$$
</div>

<p>となる。定数は固定した幾何データに依存し、全次数の評価ではさらにεに依存してよいが、$p$ と $q$ には一様である。</p>

<p>仮定に曲率の半正値性はない。半正値の場合に既知の $O(p^{n-q})$ 評価と比べると、大きい次数では既知評価の方が強い場合があり、本論文がすべての既知評価を一律に改善するわけではない。</p>

### 全次数評価の定量的形（Proposition 1.1）

<p>$1\le r\lt n$ では、任意の固定した整数 $k\ge0$ に対し定数 $C_k,N_k>0$ を選んで</p>

<div>
$$
h^q(X,L^p\otimes E)\le
C_k p^{r+\frac{2(n-r)}{2k+5}}(1+\log p)^{N_k}
$$
</div>

<p>とできる。指数の超過分をεより小さくするように $k$ を選べば、残りの正の冪に対数因子を吸収してTheorem Aを得る。しかし $k\to\infty$ での定数の制御はなく、この式から $O(p^r)$ を導くことはできない。</p>

### 小平–飯高次元の制約（Corollary 1.2）

各連結成分について

<div>
$$
\kappa(L|_{X_0})\le r
$$
</div>

が成立する。幾何学的な議論はさらに、非零の切断系が定める写像の最大階数が、曲率が半正値で少なくともその階数を持つ点で達成されることを示す。大域的な正値性を仮定せず、切断系から適切な半正値点を見つける点が特徴である。

## 証明の見取り図

端の次数については最大値原理から切断写像の階数を制約し、古典的な切断の増大、因子によるfiltration、射影束の議論を用いて固定ベクトル束で捻った零次評価へ進む。最高次はSerre双対から得る。この経路は全次数の解析評価に依存しない。

全次数では、線束の冪のweightを正則frame変更で制御できる局所領域を作る段階と、正則制限の因子数からコホモロジー次元を評価する局所化の段階を分離する。有限Taylor展開と放物型スケーリング、cellular parametrizationに由来する積写像により、曲率の有効な階数に対応する変数だけを細分する。階数変化の場所を含めて一様に制御し、局所箱の数と制限因子数を数えることでProposition 1.1の指数を得る。

原論文はCC BY-SA 4.0で公開されている。本記事の日本語解説・日本語要約は原文から作成した翻案であり、この翻案部分もCC BY-SA 4.0の下で提供する。原文の著者と出典は書誌情報および下記リンクに示す。

## 原論文との対応

- **Abstractページ:** [Dolbeault Cohomology Growth under Curvature Rank Bounds](https://arxiv.org/abs/2610.09295)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.09295v2) — Section 1, pp. 1–3（Section 2より前）。
- **Introduction中で言及された主要結果:** Theorem A、Proposition 1.1、Corollary 1.2。中間次数の鋭いO(p^r)予想は未解決として区別する。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.09295v2
- **確認したライセンス:** [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](http://creativecommons.org/licenses/by-sa/4.0/)
- **source_scope:** Abstract and Introduction
