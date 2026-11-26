---
layout: paper
title: Birational $\mathbb P^2$-bundle structures and toric 2-Fano manifolds
title_ja: 射影平面束を用いたトーリック2-Fano多様体の分類
authors: Carolina Araujo, Roya Beheshti, Ana-Maria Castravet, Kelly Jabbusch, Svetlana Makarova, Enrica Mazzon, Nivedita Viswanathan
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: In this paper, we develop a general birational program toward the classification of toric 2-Fano manifolds through the investigation of the minimal projective bundle dimension \(m(X) \in \{1,\dots,\dim(X)\}\) introduced in our previous work. This invariant captures the minimal degree of a dominating family of rational curves on \(X\) and admits a natural combinatorial interpretation in terms of centered primitive collections. We establish a general obstruction to being 2-Fano in terms of the existence of projective bundle structures and prove a birational reduction theorem for toric Fano manifolds with \(m(X)=2\). This allows us to show that the only toric 2-Fano manifold \(X\) with \(m(X) = 2\) is \(X\cong \mathbb{P}^2\). We also investigate how this strategy might extend to \(m\ge3\).
topic: algebraic-geometry
tags:
- fano-varieties
- toric-geometry
- chern-classes
- birational-geometry
arxiv_id: 2604.18054v2
arxiv_url: https://arxiv.org/abs/2604.18054
arxiv_submitted: '2026-04-20'
arxiv_updated: '2026-11-24'
summary: トーリックFano多様体で、極小の射影束次元が2なら、2-Fano条件を満たすのは射影平面だけである。稠密開集合の射影束構造から第二Chern指標の正値性を妨げる曲面を作る。
abstract_en: In this paper, we develop a general birational program toward the classification of toric 2-Fano manifolds through the investigation of the minimal projective bundle dimension \(m(X) \in \{1,\dots,\dim(X)\}\) introduced in our previous work. This invariant captures the minimal degree of a dominating family of rational curves on \(X\) and admits a natural combinatorial interpretation in terms of centered primitive collections. We establish a general obstruction to being 2-Fano in terms of the existence of projective bundle structures and prove a birational reduction theorem for toric Fano manifolds with \(m(X)=2\). This allows us to show that the only toric 2-Fano manifold \(X\) with \(m(X) = 2\) is \(X\cong \mathbb{P}^2\). We also investigate how this strategy might extend to \(m\ge3\).
summary_en: ''
abstract_ja: ファンの原始関係から得る射影束を双有理変換し、第二Chern指標が非正となる完備曲面を検出する。一般のトーリック2-Fano分類予想のうち、フリップが必要になる最初のケースを解く。
abstract_source_url: https://arxiv.org/abs/2604.18054
license_name: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)
license_url: http://creativecommons.org/licenses/by-nc-sa/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2604.18054v2](https://arxiv.org/abs/2604.18054)
- **著者:** Carolina Araujo, Roya Beheshti, Ana-Maria Castravet, Kelly Jabbusch, Svetlana Makarova, Enrica Mazzon, Nivedita Viswanathan
- **初回投稿日:** 2026-04-20
- **最終更新日:** 2026-11-24
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](http://creativecommons.org/licenses/by-nc-sa/4.0/)

## 要約

Fano性は反標準類の正値性である。2-Fano性ではさらに、すべての曲面上で接束の第二Chern指標が正であることを求める。トーリックな場合に射影空間以外の例があるかは分類上の問題である。

著者らは稠密開集合にある射影束から調べる。ファイバー次元が最小となるものが射影平面束である場合には、射影平面自身を除き、曲面との交点数が正にならないことを示す。

この結論は分類予想全体の証明ではない。残り得る反例に対して、次元、最小の束次元、Picard数のすべてに制約を課す。

## 背景と問題設定

トーリックな $X$ で、ファンの生成ベクトルの原始関係 $x\_0+\cdots+x\_m=0$ が定める最小の $m$ を $m(X)$ とする。こうした関係は開集合上の射影束および極小有理曲線族と結び付く。

## 主結果

### 最小次元が二のケース（Theorem 1.2）

$\dim X>2$ のトーリックFano多様体で $m(X)=2$ なら $X$ は2-Fanoでない。既知の結果と合わせると、射影空間以外のトーリック2-Fano多様体が存在するなら、次元 $n\ge9$、$3\le m(X)\le n-3$ で、さらに
$$
4\le\rho\_X<2n-\frac{\sqrt{60n+1249}-37}{30}
$$
が必要である（Corollary 1.3）。

### 射影束による一般の障害（Theorem 1.4）

複素多様体 $X$ の稠密開集合が $\mathbb P^m$ 束 $U\to W$（$m\ge1$）で、$W$ が完備有理曲線を含むなら、固有曲面 $S\subset X$ で
$$
\mathrm{ch}\_2(T\_X)\cdot S\le0
$$
となるものがある。トーリック性はこの障害の仮定には入らない。

## 証明の見取り図

開集合の補集合に因子がある場合、トーリックな吹き下ろしとフリップで、その補集合の余次元が二以上となるモデルに移る。そこで曲面を選び、元のモデルへの固有変換に対して第二Chern指標の交点数を比較する。射影直線束の場合と異なり、中間モデルが非射影的になる可能性も扱う。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2604.18054)
- **Introduction:** [PDF](https://arxiv.org/pdf/2604.18054v2) — §1, Theorems 1.2, 1.4 の記述と証明方針
- **Introduction中で言及された主要結果:** Theorems 1.2, 1.4、Corollary 1.3。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2604.18054v2
- **確認したライセンス:** [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](http://creativecommons.org/licenses/by-nc-sa/4.0/)
- **source\_scope:** Abstract and Introduction
