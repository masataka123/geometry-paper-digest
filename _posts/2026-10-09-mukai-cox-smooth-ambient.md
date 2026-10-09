---
layout: paper
title: The Mukai conjecture via Cox rings for smooth canonical ambient embeddings
title_ja: 滑らかな標準トーリック周囲空間を持つFano多様体のMukai予想
authors: Heath Pearson
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: 'We prove the Mukai conjecture on the characterisation of powers of projective spaces among smooth Fano varieties $n+\rho-i\rho\ge0$ for a class of locally factorial Fano varieties naturally defined in terms of their Cox rings. Recall that all klt Fano varieties $X$ embed into a projective toric variety $Z$ via their Cox ring, where $Z$ is uniquely determined up to isomorphism by the isomorphism class of $X$. We prove the Mukai conjecture when the ambient $Z$ is smooth, where we prove the stronger result $n+\rho-i\rho\ge n+\rho-\sum a_i \ge 0$, where $\sum a_i D_i$ is a distinguished anticanonical divisor supported on the Cox ring divisors of $X$. Importantly, this replicates the same stronger lower bound as proved in the case of spherical varieties. Here we are able to interpret the terms in the Mukai conjecture: $i\rho$ in terms of the geometry of the moment polytope of $Z$, and $n+\rho$ as an upper bound on the sum of coefficients in a decomposition of the anticanonical
  divisor into the Cox ring divisors. This decomposition is obtained by passing to a positive characteristic reduction of the Cox ring, where we obtain the coefficients from strong $F$-regularity, and the upper bound on the coefficient sum from the $F$-pure threshold.'
topic: algebraic-geometry
tags:
- fano-varieties
- positivity
- toric-geometry
- positive-characteristic
arxiv_id: 2604.25023v2
arxiv_url: https://arxiv.org/abs/2604.25023
arxiv_submitted: '2026-04-27'
arxiv_updated: '2026-10-07'
summary: Cox環から定まる標準的なトーリック周囲空間が滑らかなFano多様体について、Mukai予想とその等号条件を示す。反標準因子の分解係数を正標数の強F正則性で構成し、F純閾値とモーメント多面体を通じてPicard数・指数・次元を結び付ける。
abstract_en: 'We prove the Mukai conjecture on the characterisation of powers of projective spaces among smooth Fano varieties $n+\rho-i\rho\ge0$ for a class of locally factorial Fano varieties naturally defined in terms of their Cox rings. Recall that all klt Fano varieties $X$ embed into a projective toric variety $Z$ via their Cox ring, where $Z$ is uniquely determined up to isomorphism by the isomorphism class of $X$. We prove the Mukai conjecture when the ambient $Z$ is smooth, where we prove the stronger result $n+\rho-i\rho\ge n+\rho-\sum a_i \ge 0$, where $\sum a_i D_i$ is a distinguished anticanonical divisor supported on the Cox ring divisors of $X$. Importantly, this replicates the same stronger lower bound as proved in the case of spherical varieties. Here we are able to interpret the terms in the Mukai conjecture: $i\rho$ in terms of the geometry of the moment polytope of $Z$, and $n+\rho$ as an upper bound on the sum of coefficients in a decomposition of the anticanonical divisor
  into the Cox ring divisors. This decomposition is obtained by passing to a positive characteristic reduction of the Cox ring, where we obtain the coefficients from strong $F$-regularity, and the upper bound on the coefficient sum from the $F$-pure threshold.'
summary_en: ''
abstract_ja: 本論文は、Cox環による標準埋め込みの周囲トーリック多様体が滑らかな場合に、Fano多様体のMukai予想を証明する。その過程で、Cox環の生成元に対応する因子を用いて反標準類を正の係数で分解し、係数和を次元とPicard数の和で抑える、より強い不等式を得る。係数はCox環の正標数への還元と強F正則性から作られ、上界にはF純閾値が使われる。周囲空間の多面体幾何がこの分解をFano指数と結び付ける。
abstract_source_url: https://arxiv.org/abs/2604.25023
license_name: CC BY 4.0
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **原題:** The Mukai conjecture via Cox rings for smooth canonical ambient embeddings
- **著者:** Heath Pearson
- **arXiv:** [2604.25023v2](https://arxiv.org/abs/2604.25023)
- **初回投稿日 / 更新日:** 2026-04-27 / 2026-10-07
- **主分類:** math.AG
- **ライセンス:** [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)。著作権は原著者等の権利者に帰属する。

## 要約

Mukai予想は、Fano多様体の次元、Picard数、Fano指数の間の不等式と、等号が成立する射影空間の積の特徴付けを与える。本論文は、Cox環から得られる標準的なトーリック埋め込みの周囲空間が滑らかな場合に、この予想を示す。

鍵になるのは反標準因子の分解である。Cox環の最小斉次生成元に対応する因子に正の有理係数を付け、その和が反標準類となり、しかも係数和が次元とPicard数の和を超えないようにする。この構成自体は、より広いFano型多様体にも適用される。

周囲空間の滑らかさは、その係数和をFano指数とPicard数の積で下から抑える段階に使われる。したがって、本論文の結論を任意の滑らかなFano多様体へ無条件に広げることはできない。Introductionは、球面的Fano多様体に対する既知の強い評価との類似と、一般の場合に残る課題を区別している。

## 背景と問題設定

<p>複素Fano多様体 $X$ の次元を $n$、Picard数を $\rho_X$、Fano指数を $i_X=\max\{k\in\mathbb Z_{>0}\mid [-K_X]=kH,\ H\in\operatorname{Pic}(X)\}$ とする。Mukai予想（Conjecture 1.1）は $(i_X-1)\rho_X\le n$ と、その等号条件を問う。</p>

<p>Definition-Proposition 1.3では、klt Fano多様体のCox環の最小斉次生成元から標準的な閉埋め込み $X\hookrightarrow Z$ を作り、$Z$ が滑らかなものを ambiently smooth と呼ぶ。一般化旗多様体、次元3以上の滑らかなFano完全交差、滑らかなトーリックFano多様体が例として挙げられる。</p>

## 主結果

### 主定理1：Mukai不等式と等号条件（Theorem 1.5）

<p>ambiently smooth Fano多様体ではMukai予想が成り立つ。さらに、Cox環の因子 $D_1,\ldots,D_m$ に対するある有理数 $0\lt a_j\le1$ を用いて、次の強い評価が成立する。</p>

<div>
$$
\sum_{j=1}^{m}a_jD_j\sim_{\mathbb Q}-K_X,
\qquad
n+\rho_X-i_X\rho_X
\ge n+\rho_X-\sum_{j=1}^{m}a_j\ge0.
$$
</div>

<p>したがって $(i_X-1)\rho_X\le n$ であり、等号は $X\cong(\mathbb P^{i_X-1})^{\rho_X}$ と同値である。単なる数値評価にとどまらず、極限の場合の多様体そのものを決定する。</p>

### 主定理2：Fano型多様体の反標準分解（Theorem 1.6）

<p>$X$ を $\mathbb Q$-factorialなFano型多様体とし、$\operatorname{Cl}(X)$ が自由であると仮定する。Fano型とは、ある有効な $\mathbb Q$-因子 $\Delta$ に対して $(X,\Delta)$ がkltで、$-(K_X+\Delta)$ が豊富であることをいう。Cox環の最小斉次生成元の次数を $w_j$ とすると、次の分解が存在する。</p>

<div>
$$
0\lt a_j\le1,\qquad
\sum_{j=1}^{m}a_jw_j=[-K_X],\qquad
\sum_{j=1}^{m}a_j\le n+\rho_X.
$$
</div>

<p>Cox環が多項式環でない、すなわち $X$ がトーリックでない場合は、さらに $\sum_j a_j\le n+\rho_X-1$ とできる。こちらの定理には周囲空間の滑らかさを仮定しない。分解の存在と、それをMukai不等式へ変換する幾何的条件を分離した点が重要である。</p>

<p>Remark 1.9で、この分解から得られる対 $(X,\sum_j a_jD_j)$ がlog canonicalかどうかは期待として述べられている。これを本論文で証明された結論とは扱わない。</p>

## 証明の見取り図

<p>Introductionの方針は二段階である。まずCox環を次数付けと反標準加群を保って正標数へ還元する。生成元の積に強F正則性を適用して係数を作り、頂点の局所環のF純閾値からその和の上界を得る。</p>

<p>次に、標準トーリック周囲空間と反標準類に対応する偏極のモーメント多面体を使って $i_X\rho_X\le\sum_j a_j$ を示す。等号の場合には、非正則局所環に対するより強い閾値評価からCox環が多項式環であることを導く方法と、多面体から周囲空間が射影空間の積になることを導く方法の二つが紹介される。本文後半の証明は本記事の確認範囲に含めない。</p>

## 原論文との対応

- **Abstractページ:** [2604.25023](https://arxiv.org/abs/2604.25023)
- **PDF:** [2604.25023v2](https://arxiv.org/pdf/2604.25023v2)
- **Introduction:** Section 1, pp. 1–5
- **主要結果:** Theorems 1.5, 1.6; Remarks 1.7–1.10（Theorem 1.2は先行研究）
- **確認バージョン:** 2604.25023v2
- **確認ライセンス:** [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)
- **source_scope:** Abstract and Introduction。後続節の証明全体の精読・独立検証は行っていない。
