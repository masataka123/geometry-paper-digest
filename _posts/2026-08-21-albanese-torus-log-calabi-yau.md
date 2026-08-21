---
layout: paper
title: "On the birational isotriviality of the Albanese morphism of a log Calabi-Yau pair with a torus action"
title_ja: "トーラス作用をもつlog Calabi–Yau対のAlbanese射の双有理等自明性"
authors: "Linus Rösler"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  Let $(X,Δ)$ be a projective, log canonical, $K$-trivial pair over the complex numbers. Let $Z$ be a minimal log canonical center of $(X,Δ)$ and suppose that there exists a torus $\mathbb{T}\subseteq\operatorname{Aut}(X)$ preserving $Δ$ and such that $\dim\mathbb{T}=\operatorname{codim}_X Z$. Then we show that two general fibers of the Albanese morphism $\operatorname{alb}_X$ are birationally equivalent. In particular, the pathological example of a projective, log canonical, $K$-trivial variety whose Albanese morphism is not generically birationally isotrivial, recently constructed by Bernasconi, Filipazzi, Patakfalvi and Tsakanikas, can be avoided under the additional hypothesis that there exists a torus of large enough dimension in the automorphism group of the given pair.
topic: algebraic-geometry
tags:
  - birational-geometry
  - calabi-yau-geometry
  - singularities
  - moduli
arxiv_id: "2602.20027v2"
arxiv_url: "https://arxiv.org/abs/2602.20027"
arxiv_submitted: "2026-02-23"
arxiv_updated: "2026-02-24"
summary: >-
  log canonicalなlog Calabi–Yau対に最大次元のトーラス作用があるとき、Albanese射の一般ファイバーが互いに双有理となることを示す。kltの場合には知られていた弱Beauville–Bogomolov分解がlog canonical特異点では破綻し得るという問題に、対称性を仮定した肯定的な答えを与える。
abstract_en: ""
summary_en: >-
  The paper studies the Albanese fibration of a projective log canonical pair with trivial log canonical class. It assumes that a torus preserving the boundary reaches the maximal dimension allowed by a minimal log canonical center. Under this symmetry condition, any two general Albanese fibers are birational. The result rules out a known failure of weak Beauville–Bogomolov behavior in this setting, while examples show that the birational form of the conclusion is essentially sharp.
abstract_ja: >-
  複素数体上の射影的log canonicalかつ $K$-trivialな対 $(X,\Delta)$ を考える。最小log canonical中心 $Z$ に対し、境界を保つトーラスの次元が $\operatorname{codim}_X Z$ に達するなら、Albanese射の二つの一般ファイバーは双有理同値となる。
abstract_source_url: "https://arxiv.org/abs/2602.20027"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2602.20027v2](https://arxiv.org/abs/2602.20027)
- **著者:** Linus Rösler
- **初回投稿日:** 2026-02-23
- **最終更新日:** 2026-02-24
- **主分類・副分類:** math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかな $K$-trivial射影多様体のAlbanese射では全ファイバーが同型であり、klt対にも弱Beauville–Bogomolov分解が拡張されている。一方、strictly log canonicalな $K$-trivial多様体では一般ファイバーさえ双有理に一定でない例がある。

本論文は境界 $\Delta$ を保つトーラス $\mathbb T\subseteq\operatorname{Aut}(X)$ を仮定する。最小lc中心 $Z$ に対して一般に $\dim\mathbb T\leq\operatorname{codim}_X Z$ であり、等号を満たす最大の対称性のもとでAlbanese射を調べる。

主結果は、二つの一般閉ファイバーが双有理同値になるというものである。Albanese射は既知結果によりflatなので、底の稠密開集合の有限étale被覆後に族が一般ファイバーの双有理モデルとの自明積になる、という形にも言い換えられる。

Introductionの例は、全ファイバーについての双有理等自明性や一般ファイバーの同型等自明性までは結論できないことを示す。したがって主定理の「一般」「双有理」という限定には実質的な意味がある。

## 背景と問題設定

log Calabi–Yau対とは、ここでは射影的log canonical対 $(X,\Delta)$ で $K_X+\Delta$ が自明なものを指す。トーラスの次元が多様体の次元に等しければトーリックとなるが、本論文では最小lc中心の余次元が自然な上限を与える。境界込みのcrepant双有理等自明性が得られるかはIntroductionで未解決問題として残される。

## 主結果

### 一般双有理等自明性（Theorem A）

$(X,\Delta)$ をlog Calabi–Yau対、$Z$ をその最小lc中心とする。$\Delta$ を保つトーラス $\mathbb T\subseteq\operatorname{Aut}(X)$ が

$$
\dim\mathbb T=\operatorname{codim}_X Z
$$

を満たすなら、

$$
\operatorname{alb}_X:X\longrightarrow\operatorname{Alb}X
$$

はgenerically birationally isotrivialである。すなわち二つの一般閉ファイバーは双有理同値である。

## 証明の見取り図

dltの場合、最小lc中心へのadjunctionでkltな $K$-trivial対 $(Z,\Delta_Z)$ を得て、そのAlbanese射の既知の等自明性を使う。トーラス作用のBiałynicki–Birula分解により、$Z$ 上のcellが $X$ の開集合となるよう部分コンパクト化を選び、開集合のAlbaneseと剛性補題を通じて $X$ と $Z$ の一般ファイバーを比較する。一般のlc対へはトーラス同変dlt modificationと同変MMPを用いて移る。

## 原論文との対応

- **Abstractページ:** [arXiv:2602.20027](https://arxiv.org/abs/2602.20027)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorem A
- **論文構成・証明方針の説明:** Section 1.1, pp. 3–4
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
