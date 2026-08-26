---
layout: paper
title: "The $J$-equation on Kähler manifolds under a smooth boundary cone condition"
title_ja: "滑らかな境界錐条件の下でのKähler多様体上のJ方程式"
authors: "Junbang Liu"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.CV
arxiv_abstract: >-
  For a $n$-dimensional compact Kähler manifold $X$ with a pair of Kähler classes $(\alpha,\beta)$, we show that the algebraically defined $J$-null locus is equal to the analytically defined $J$-non-ample locus under the assumption of $J$-bigness(which is automatic for semistable pair up to dimension $3$ \cite{3d}), and boundary cone condition $c_{\alpha,\beta}\omega^{n-1}-(n-1)\omega^{n-2}\wedge\chi\geq 0$ for some Kähler form $\omega\in \alpha,\chi\in \beta$. The key tool is the generalized Khovanskii-Teissier inequality associated to $J$ equation formulated by Collins \cite{CT21} and its extension to singular Kähler space.
topic: differential-geometry
tags:
  - positivity
  - csck-extremal-kahler-metrics
  - monge-ampere-equations
arxiv_id: "2608.23747v1"
arxiv_url: "https://arxiv.org/abs/2608.23747"
arxiv_submitted: "2026-08-24"
arxiv_updated: "2026-08-24"
summary: >-
  コンパクトKähler多様体上の $J$ 方程式について、$J$-bignessと滑らかな境界錐条件の下で、数値的な $J$-null locusと解析的な $J$-non-ample locusが一致することを示す。高次元で退化集合が有限個の素因子の和になることを証明し、$J$-flowの特異集合と収束も記述する。
abstract_en: >-
  For a $n$-dimensional compact Kähler manifold $X$ with a pair of Kähler classes $(\alpha,\beta)$, we show that the algebraically defined $J$-null locus is equal to the analytically defined $J$-non-ample locus under the assumption of $J$-bigness(which is automatic for semistable pair up to dimension $3$ \cite{3d}), and boundary cone condition $c_{\alpha,\beta}\omega^{n-1}-(n-1)\omega^{n-2}\wedge\chi\geq 0$ for some Kähler form $\omega\in \alpha,\chi\in \beta$. The key tool is the generalized Khovanskii-Teissier inequality associated to $J$ equation formulated by Collins \cite{CT21} and its extension to singular Kähler space.
summary_en: >-
  
abstract_ja: >-
  コンパクトKähler多様体 $X$ 上の2つのKähler類 $(\alpha,\beta)$ を考える。$J$-bignessと、ある代表 $\omega\in\alpha$, $\chi\in\beta$ に対する境界錐条件の下で、代数的に定義される $J$-null locusと解析的に定義される $J$-non-ample locusが一致する。主要な道具は $J$ 方程式に付随する一般化Khovanskii–Teissier不等式と、その特異Kähler空間への拡張である。
abstract_source_url: "https://arxiv.org/abs/2608.23747"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.23747](https://arxiv.org/abs/2608.23747)
- **著者:** Junbang Liu
- **初回投稿日:** 2026年8月24日
- **最終更新日:** 2026年8月24日
- **主分類・副分類:** math.DG（主）, math.CV（副）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

$J$ 方程式はDonaldsonのmoment map像とChenの $J$ 汎関数・Mabuchi energyから現れ、その滑らかな可解性はstrict cone conditionで理解される。境界では滑らかな解が失われうるため、弱解や $J$-flowの極限がどこで特異になるかが問題となる。

論文は部分多様体上の交点数が消える場所を $J$-null locus、解析的特異点をもつ弱いcone currentが正のLelong数をもつ不可避な場所を $J$-non-ample locusとして比較する。3次元での結果に対し、高次元ではさまざまな余次元のnull部分多様体が現れうることが障害である。

$J$-bignessと滑らかな境界錐条件を仮定すると、null locusは有限個の素因子だけからなり、解析的なnon-ample locusと一致する。さらにその合併をちょうど正のLelong集合として実現するcurrentを構成する。

仮定を $J$-nefnessだけに弱められるか、数値的 $J$-nefnessから $J$-bignessが従うかは未解決として残る。したがって主結果は高次元問題の完全解決ではなく、因子的退化に対する条件付きの対応定理である。

## 背景と問題設定

$n\ge4$、$c_{\alpha,\beta}=n\beta\cdot\alpha^{n-1}/\alpha^n$ とする。$J$ 方程式は

$$
\operatorname{tr}_{\omega_\varphi}\chi=c_{\alpha,\beta},\qquad \omega_\varphi=\omega+dd^c\varphi\in\alpha
$$

である。既約部分多様体 $V$、$p=\dim V>0$ に対して

$$
J_{c_{\alpha,\beta}}(V,\alpha,\beta)=\int_V\left(c_{\alpha,\beta}\alpha^p-p\beta\alpha^{p-1}\right)
$$

を定め、この値が0となる真部分多様体の合併を $\operatorname{Null}_J(\alpha,\beta)$ とする。

## 主結果

### 主定理（Theorem 1）

$(\alpha,\beta)$ が $J$-bigで、Kähler形式 $\omega\in\alpha$, $\chi\in\beta$ が

$$
c_{\alpha,\beta}\omega^{n-1}-(n-1)\omega^{n-2}\wedge\chi\ge0
$$

を満たすなら、$\operatorname{Null}_J(\alpha,\beta)$ は有限個の素因子 $D_1,\ldots,D_N$ の合併である。すべての許容currentはこの合併上で正のLelong数をもち、逆に正のLelong集合がちょうどこの合併となるcurrentが存在する。従って

$$
E^{\mathrm{nJ}}(\alpha,\beta)=\operatorname{Null}_J(\alpha,\beta)
$$

が成り立つ。

### 数値的特徴づけ（Proposition 2）

境界錐条件の下で、$J$-bignessは、すべての非零移動可能曲線類 $\xi\in\operatorname{MN}(X)$ に対する

$$
\left(c_{\alpha,\beta}\alpha^{n-1}-(n-1)\beta\alpha^{n-2}\right)\cdot\xi>0
$$

と同値である。

### $J$-flowの収束（Corollary 3）

同じ仮定の下で、正規化した $J$-flowのpotentialはnull locusの外で滑らかに収束し、対応するKähler形式はcurrentの意味で極限へ収束する。

## 証明の見取り図

まず境界錐条件から低次元の数値的不等式をstrictにし、null locusを因子に限定する。null因子の交点行列について、$J$ 汎関数の漸近と一般化Khovanskii–Teissier不等式を使って負定値性を示す。特異なnull因子にも適用できるよう、不等式を正規化とlog resolutionを通じて特異Kähler空間へ拡張する。負定値性から全null因子のslopeを同時にstrict側へ動かす有効因子を作り、Fang–Ma型方程式で得たKähler形式に因子的currentを戻すことで、所望のLelong集合を実現する。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.23747](https://arxiv.org/abs/2608.23747)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorem 1, Proposition 2, Corollary 3
- **論文構成の説明:** Introduction末尾, p. 4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
