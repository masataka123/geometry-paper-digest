---
layout: paper
title: "Deformations of Compact Calabi--Yau and Fano Varieties with Isolated Singularities"
title_ja: "孤立特異点をもつコンパクトCalabi–Yau多様体とFano多様体の変形"
authors: "Yohsuke Imagi"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
arxiv_abstract: >-
  Let $X$ be a compact log-canonical Kähler $n$-fold, $n\ge3,$ with trivial canonical sheaf and with isolated singularities. We prove that the generic fibres of a semi-universal deformation of $X$ have Du Bois invariant $b^{1,n-2}=0$ at the singular points. Under a certain topological hypothesis on $X$ the generic fibres have also link invariant $l^{1,n-2}=0.$ If $X$ is a projective log-canonical $n$-fold, $n\ge3,$ with ample anti-canonical sheaf and with isolated singularities then the generic fibres have $b^{1,n-2}=l^{1,n-2}=0$ (without the topological hypothesis). These are generalizations of recent results of Tenie `Global smoothing of singular Fano and Calabi--Yau varieties' and an older result of Namikawa `Deformation theory of Calabi--Yau threefolds and certain invariants of singularities.'
topic: algebraic-geometry
tags:
  - singularities
  - moduli
  - calabi-yau-geometry
  - fano-varieties
arxiv_id: "2609.00758v1"
arxiv_url: "https://arxiv.org/abs/2609.00758"
arxiv_submitted: "2026-09-01"
arxiv_updated: "2026-09-01"
summary: >-
  孤立log canonical特異点をもつ3次元以上のCalabi–Yau型Kähler多様体とFano多様体について、半普遍変形の一般ファイバーでDu Bois不変量とlink不変量が消えることを示す。完全交差特異点や滑らかなKuranishi空間を仮定しない形で、既知の大域平滑化結果を一般化する。
abstract_en: >-
  Let $X$ be a compact log-canonical Kähler $n$-fold, $n\ge3,$ with trivial canonical sheaf and with isolated singularities. We prove that the generic fibres of a semi-universal deformation of $X$ have Du Bois invariant $b^{1,n-2}=0$ at the singular points. Under a certain topological hypothesis on $X$ the generic fibres have also link invariant $l^{1,n-2}=0.$ If $X$ is a projective log-canonical $n$-fold, $n\ge3,$ with ample anti-canonical sheaf and with isolated singularities then the generic fibres have $b^{1,n-2}=l^{1,n-2}=0$ (without the topological hypothesis). These are generalizations of recent results of Tenie `Global smoothing of singular Fano and Calabi--Yau varieties' and an older result of Namikawa `Deformation theory of Calabi--Yau threefolds and certain invariants of singularities.'
summary_en: ""
abstract_ja: >-
  標準層が自明で孤立特異点をもつ3次元以上のコンパクトlog canonical Kähler多様体について、半普遍変形の一般ファイバーの特異点でDu Bois不変量 $b^{1,n-2}$ が消えることを示す。ある位相的仮定の下ではlink不変量 $l^{1,n-2}$ も消える。反標準層がampleな射影log canonical多様体では、追加の位相的仮定なしに両不変量が消える。
abstract_source_url: "https://arxiv.org/abs/2609.00758"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.00758](https://arxiv.org/abs/2609.00758)
- **著者:** Yohsuke Imagi
- **初回投稿日:** 2026年9月1日
- **最終更新日:** 2026年9月1日
- **主分類・副分類:** math.AG（主分類）、math.CV（副分類）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

特異Calabi–Yau多様体やFano多様体を変形して特異性を改善できるかという大域平滑化問題を扱う。既知結果の多くは孤立完全交差特異点や非特異なKuranishi空間を仮定していたが、一般の孤立log canonical特異点では局所的にさえ平滑化可能とは限らない。

本論文は「一般変形で特異点が消える」という結論を直接要求せず、Du Bois不変量 $b^{1,n-2}$ とlink不変量 $l^{1,n-2}$ の消滅を特異性改善の尺度とする。完全交差の場合には、これらはそれぞれ1-Du Bois性と1-rational性に対応する。

標準層が自明なコンパクトKählerの場合には、一般変形でまず $b^{1,n-2}=0$ を得る。さらに特定のcohomology connecting mapの全射性を仮定すると $l^{1,n-2}=0$ も得られる。

反標準層がampleな射影Fano型の場合には、この追加の位相的仮定を必要とせず両不変量が消える。3次元で局所平滑化可能性を加えると、剛性定理を介して大域平滑化が従う。

## 背景と問題設定

半普遍変形の底 $\operatorname{Def}(X)$ 自体が特異になり得る点が核心である。従来の「局所平滑化方向を障害なく大域化する」という議論をそのまま使えないため、局所Kuranishi空間のstratificationとsimultaneous resolutionを用いる。

Calabi–Yau型の場合に必要な位相条件は

$$
H^n(X_{\mathrm{reg}},\mathbb{C})\longrightarrow H^{n+1}(X,X_{\mathrm{reg}};\mathbb{C})
$$

が全射であることである。

## 主結果

### Calabi–Yau型のDu Bois不変量（Theorem 1.7）

$X$ を $n\geq3$、$\omega_X\simeq\mathcal{O}_X$、孤立特異点をもつコンパクトKähler log canonical $n$ 次元多様体とする。半普遍変形 $\mathcal{X}\to\operatorname{Def}(X)$ とZariski稠密開集合 $\Delta$ が存在し、$t\in\Delta$ のファイバーの特異点は $b^{1,n-2}=0$ を満たす。

### 位相条件下でのlink不変量（Theorem 1.8）

上のconnecting mapが全射なら、一般ファイバーの特異点は

$$
b^{1,n-2}=l^{1,n-2}=0
$$

を満たす。

### Fano型の主定理（Theorem 1.12）

$X$ を $n\geq3$、孤立特異点をもち $\omega_X^{-1}$ がampleな射影log canonical Gorenstein多様体とする。半普遍変形のZariski一般ファイバーでは、追加の位相条件なしに $b^{1,n-2}=l^{1,n-2}=0$ が成り立つ。

### 3次元の平滑化帰結（Corollaries 1.10, 1.13）

3次元では、各特異点がZariski一般の局所変形で平滑になるという仮定を加えると、一般の大域ファイバーも非特異になる。

## 証明の見取り図

局所Kuranishi空間を、変形族がsimultaneous resolutionをもつstratumへ分ける。大域変形の接ベクトルが現在のstratumに接しないよう選び、より高次元のstratumへ移る操作を有限回反復する。これにより不変量が消える一般ファイバーへ到達する。

この議論には $\operatorname{Def}(X)$ の非特異性を要しない。resolution pair $(Y,E)$ の変形空間から $\operatorname{Def}(X)$ への接写像の全射性を示すことが要点となる。Kähler性とlog canonical性が変形で開条件であること、Du Bois特異点の消滅定理が大域化を支える。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.00758](https://arxiv.org/abs/2609.00758)
- **Introduction:** Section 1, pp. 1–6
- **Introduction中で言及された主要定理番号:** Theorems 1.7, 1.8, 1.9, 1.12; Corollaries 1.10, 1.13
- **論文構成の説明:** Introduction, pp. 5–6
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
