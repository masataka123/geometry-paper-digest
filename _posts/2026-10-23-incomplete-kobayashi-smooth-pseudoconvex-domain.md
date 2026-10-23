---
layout: paper
title: A smoothly bounded pseudoconvex domain with incomplete Kobayashi distance
title_ja: 滑らかな有界擬凸領域でもKobayashi距離は完備とは限らない
authors: Armen Edigarian
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: We construct a bounded pseudoconvex domain in $\C^3$ with $C^\infty$ boundary which is not Kobayashi complete. The domain has a smooth plurisubharmonic defining function, and its Carath\'eodory distance is also incomplete. We then prove that every bounded pseudoconvex domain with $C^\infty$ boundary of finite D'Angelo type is Kobayashi complete. Consequently, every bounded pseudoconvex domain with real-analytic boundary is Kobayashi complete. We also obtain quantitative lower estimates for the Kobayashi--Royden metric and the Kobayashi distance in the finite-type case.
topic: several-complex-variables
tags:
- hyperbolicity
- pluripotential-theory
arxiv_id: 2610.28833v1
arxiv_url: https://arxiv.org/abs/2610.28833
arxiv_submitted: '2026-10-20'
arxiv_updated: '2026-10-20'
summary: C∞境界を持つC³の有界擬凸領域で、Kobayashi距離とCarathéodory距離がともに不完備となる例を構成する。一方、任意次元で有限D’Angelo型を仮定すればKobayashi完備性を示す。境界の滑らかさだけでは足りず、型の条件が決定的な差を生むことを明らかにする。
abstract_en: We construct a bounded pseudoconvex domain in $\C^3$ with $C^\infty$ boundary which is not Kobayashi complete. The domain has a smooth plurisubharmonic defining function, and its Carath\'eodory distance is also incomplete. We then prove that every bounded pseudoconvex domain with $C^\infty$ boundary of finite D'Angelo type is Kobayashi complete. Consequently, every bounded pseudoconvex domain with real-analytic boundary is Kobayashi complete. We also obtain quantitative lower estimates for the Kobayashi--Royden metric and the Kobayashi distance in the finite-type case.
summary_en: ''
abstract_ja: C³に、滑らかな多重劣調和定義関数を持つC∞境界の有界擬凸領域で、Kobayashi距離が不完備となるものを構成する。そのCarathéodory距離も不完備である。対照的に、任意次元のC∞境界を持つ有界擬凸領域は有限D’Angelo型ならKobayashi完備であり、実解析的境界の場合も完備となる。有限型の場合にはKobayashi–Royden計量とKobayashi距離の定量的下限も得る。
abstract_source_url: https://arxiv.org/abs/2610.28833
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.28833v1](https://arxiv.org/abs/2610.28833)
- **著者:** Armen Edigarian
- **初回投稿日:** 2026-10-20
- **最終更新日:** 2026-10-20
- **主分類・副分類:** math.CV（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

有界擬凸領域では、境界に近づく点がKobayashi距離で無限に遠くなるかという完備性の問題がある。強擬凸の場合や複素二次元の有限型の場合には既知の肯定的結果があるが、単に境界が滑らかな場合と有限型の場合は分けて考える必要がある。

本論文は複素三次元に反例を構成する。領域は有界で境界はC∞、しかも滑らかな多重劣調和定義関数を持つ。それでも内向き法線に沿って境界へ近づくKobayashi–Cauchy列が存在し、距離は完備ではない。

一方で、有限D’Angelo型という条件を加えると任意次元でKobayashi完備性が成立する。反例と肯定的定理を並べることで、境界の微分可能性だけでは捉えられない接触の型が、距離の発散を左右することを示す。

## 背景と問題設定

Kobayashi距離は正則写像による距離減少性を組み込んだ複素解析的な距離である。領域内でCauchyとなる列が領域内に極限を持つかが完備性の問題となる。D’Angelo型は境界と複素解析的曲線との接触を測る条件であり、滑らかさそのものとは異なる。

Introductionは、強擬凸領域に対するGrahamの評価、複素二次元でのBedford–Fornæssのpeak関数、有限型の不変計量に対するCatlinおよびChoの評価を背景に挙げる。

## 主結果

### 滑らかな擬凸反例（Theorem 1.1）

ある$\rho\in C^\infty(\mathbb C^2)\cap\operatorname{PSH}(\mathbb C^2)$が存在して、

$$
\Omega=\lbrace (s,t,w)\in\mathbb C^3:|w|^2+\rho(s,t)<1\rbrace
$$

はC∞境界を持つ有界領域でありながら、Kobayashi距離が不完備になる。具体的には、内向き法線に沿って$(0,0,1)\in\partial\Omega$へユークリッド収束するKobayashi–Cauchy列を持つ。同じ領域のCarathéodory距離も不完備である。

### 有限型の場合の完備性（Theorem 1.2）

$\mathbb C^N$の有界擬凸領域で、境界がC∞かつ有限D’Angelo型なら、Kobayashi距離は完備である。次元を2に制限しない点が主張の範囲であり、Theorem 1.1と矛盾しないよう有限型の仮定を保つ必要がある。

### 実解析的境界（Corollary 1.3）

実解析的境界を持つ任意次元の有界擬凸領域はKobayashi完備である。したがって、反例でのC∞境界を実解析的境界へそのまま強めることはできない。

### 距離と無限小計量の定量的下限

有限型の定理の設定で、$r<0$を滑らかな定義関数、$\delta\_\Omega(z)=\operatorname{dist}(z,\partial\Omega)$とする。境界近くでは、ある$c,A>0$について

$$
\kappa\_\Omega(z;X)\geq c\frac{|\partial r(z)X|}{-r(z)}
\frac{\log\log(A/(-r(z)))}{\log(A/(-r(z)))}
$$

が成り立つ。ここで$\partial r(z)X=\sum\_j r\_{z\_j}(z)X\_j$である。また固定点$z\_0\in\Omega$に対し

$$
k\_\Omega(z\_0,z)\geq c\left(\log\log\frac A{\delta\_\Omega(z)}\right)^2-C\_{z\_0}
$$

を得る。$A$は対数が適切に定義されるほど大きく取る。この式は境界へ近づくと距離が発散することを具体化するが、Introductionは評価の最適性を主張していない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.28833)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.28833v1) — Section 1、PDF pp. 1–2。
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2、Corollary 1.3、式(1)、(2)。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.28833v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
