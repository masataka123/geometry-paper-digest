---
layout: paper
title: "The geography of Chern slopes with prescribed fundamental group"
title_ja: "基本群を指定したChern勾配の地理"
authors: "Maycol Falla Luza"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  Let $G$ be the topological fundamental group of a nonsingular complex projective surface. Troncoso and Urzúa proved that the Chern slopes $c_1^2/c_2$ of minimal surfaces of general type $S$ with $π_1(S)\simeq G$ are dense in $[1,3]$, and left $[1/3,1)$ open. We prove that they are dense in $[1/2,3]$, an interval that cannot be enlarged without contradicting either a theorem of Mendes Lopes and Pardini or Reid's conjecture. We prove more: the slopes of such surfaces with $K_S$ ample are dense in $[1/2,2]$, the first case in which the conjecture of Troncoso and Urzúa on ample canonical classes is established. The tool is an exact ampleness criterion for their product construction, which shows in particular that their own surfaces never have ample canonical class, whatever the defining sections.
topic: algebraic-geometry
tags:
  - chern-classes
  - fundamental-groups
  - positivity
arxiv_id: "2608.25306v1"
arxiv_url: "https://arxiv.org/abs/2608.25306"
arxiv_submitted: "2026-08-26"
arxiv_updated: "2026-08-26"
summary: >-
  指定した基本群をもつ一般型曲面について、Chern勾配 $c_1^2/c_2$ が $[1/2,3]$ に稠密であることを示す。さらに標準束が豊富な場合にも $[1/2,2]$ で稠密性を確立し、積構成の標準束が豊富となるための完全な判定条件を与える。
abstract_en: ""
summary_en: >-
  The paper studies Chern slopes of smooth minimal surfaces of general type while fixing their topological fundamental group. It extends the known density range downward to one half and obtains a separate density statement when the canonical class is ample. The construction combines double covers with a product construction, whose canonical ampleness is controlled by an exact curve criterion. The result also identifies an unavoidable obstruction to ampleness in the earlier family used for prescribed fundamental groups.
abstract_ja: >-
  滑らかな複素射影曲面の基本群 $G$ を固定し、一般型極小曲面のChern勾配を調べる。既知の稠密区間 $[1,3]$ を $[1/2,3]$ へ拡張し、標準束が豊富という追加条件の下でも $[1/2,2]$ で稠密であることを示す。鍵は積構成に対する豊富性の必要十分条件であり、従来の構成から得られる曲面の標準束が常に豊富でないことも従う。
abstract_source_url: "https://arxiv.org/abs/2608.25306"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.25306](https://arxiv.org/abs/2608.25306)
- **著者:** Maycol Falla Luza
- **初回投稿日・最終更新日:** 2026年8月26日
- **主分類:** math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

一般型極小曲面 $S$ のChern勾配は $c_1^2(S)/c_2(S)=K_S^2/e(S)$ である。Noether不等式とBogomolov–Miyaoka–Yau不等式はその可能域を制約するが、基本群を指定したときにどの値が現れるかは別の地理問題となる。

従来は、滑らかな複素射影曲面の基本群として現れる任意の群 $G$ に対して、勾配が $[1,3]$ に稠密であることが知られていた。本論文は下端を $1/2$ まで下げる。さらに $K_S$ が豊富な曲面に限っても $[1/2,2]$ の稠密性を得る。

証明では、$\mathbb P^1\times\mathbb P^1$ の滑らかな分岐因子に沿う二重被覆を入力とし、積の二つの一般超曲面の交わりとして曲面を作る。補助束の寄与を消去せず、二つのパラメータを変化させることで新しい勾配域を生み出す点が新しい。

## 背景と問題設定

任意の指定基本群に対する従来の構成は $(-2)$ 曲線を含み、標準束はbigかつnefであっても豊富ではなかった。また勾配 $1/2$ 未満の一様な稠密性はReid予想と緊張関係にあるため、今回の下端は現在の予想と整合する自然な境界である。

積構成では曲面 $X,Y$、$X$ 上のlef束 $\sigma$、$Y$ 上の非常に豊富な束 $B$ から $S\subset X\times Y$ を得る。$B=mB_0$ として $m\to\infty$ とすると中心式は

$$
\lim_{m\to\infty}\frac{c_1^2(S)}{c_2(S)}=
\frac{c_1^2(X)+24\sigma^2+12\sigma\cdot K_X}
{c_2(X)+18\sigma^2+6\sigma\cdot K_X}.
$$

## 主結果

### 主定理（Theorem 1.4）

$G$ が滑らかな複素射影曲面の位相的基本群なら、$\pi_1(S)\simeq G$ を満たす一般型の滑らかな極小射影曲面のChern勾配は $[1/2,3]$ に稠密である。

### 豊富な標準束をもつ場合（Theorem 1.5）

同じ $G$ に対し、$K_S$ が豊富という条件を課してもChern勾配は $[1/2,2]$ に稠密である。指定基本群と標準束の豊富性を同時に保つ点が主要な新規性である。

### 豊富性判定（Theorem 1.6）

積構成で得られる $S$ の標準束が豊富であるための必要十分条件は、$X$ に

$$
K_X\cdot\Gamma=0,\qquad \sigma\cdot\Gamma=0
$$

を同時に満たす既約曲線 $\Gamma$ が存在しないことである。従来族にはこの条件に反する例外曲線が必ず生じるため、切断の選択によらず標準束は豊富にならない。

## 証明の見取り図

滑らかな分岐曲線を用いる二重被覆によって $K_X$ を豊富にし、従来構成に現れた $(-2)$ 曲線を避ける。次にNakai–Moishezon判定を積構成へ適用し、標準束と交点ゼロとなる曲線を上の二つの交点条件へ還元する。最後に二重被覆と補助束の数値を独立に動かし、極限勾配が $[1/2,2]$ を走ることを示し、既知の $[1,3]$ と合わせる。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.25306](https://arxiv.org/abs/2608.25306)
- **Introduction:** Section 1, pp. 1–3
- **主要定理:** Theorems 1.4, 1.5, 1.6; Corollary 1.7
- **証明方針:** Section 1.3, pp. 3–4
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
