---
layout: paper
title: Constructing Rational Curves via Jets on Projective Varieties with Non-Nef Canonical Bundle
title_ja: 非nef標準束を持つ射影多様体上のジェットによる有理曲線構成
authors: Bin Dong, Guoxiong Gao, Bin Guo, Zeming Sun, Bin Wu, Song-Yan Xie
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CV
arxiv_abstract: 'We give an algebraic proof in characteristic zero of the Miyaoka--Mori criterion: every point of a curve of negative canonical degree on a smooth projective variety lies on a rational curve. Our jet technique gives, in addition, an effective numerical decomposition of the original curve class. For each prescribed point, the decomposition contains a rational curve through that point, with a positive coefficient independent of the point and with anticanonical degree at most $\dim X+1$. Together with BDPP cone duality, this recovers the projective uniruledness criterion over $\mathbb C$. The main result of this paper was obtained using the Pharos system. A detailed report on the use of Pharos and on the Lean~4 formalization of the main arguments is given in the Appendix B, written by Bin Dong, Guoxiong Gao, Zeming Sun, and Bin Wu.'
topic: algebraic-geometry
tags:
- birational-geometry
- positivity
arxiv_id: 2609.28465v1
arxiv_url: https://arxiv.org/abs/2609.28465
arxiv_submitted: '2026-09-23'
arxiv_updated: '2026-09-23'
summary: 標数0の滑らかな射影多様体で、反標準次数が正の曲線上の各点を通る有理曲線をジェットから構成し、Miyaoka–Mori判定法に代数的証明を与える。元の曲線類を、点に依存しない正係数を持つ有理曲線と有効サイクルへ数値分解し、その有理曲線の反標準次数を $\dim X+1$ 以下に抑える。
abstract_en: ''
summary_en: The paper gives a characteristic-zero algebraic construction of rational curves from a curve with negative canonical degree. Weighted jets produce a ruled surface and an effective numerical decomposition of the original curve class. The rational component passes through any chosen point, has a coefficient independent of that point, and satisfies an anticanonical degree bound. Combined with cone duality, the construction recovers the projective uniruledness criterion.
abstract_ja: 滑らかな射影多様体 $X$ 上の曲線 $f(C)$ が $-K_X\cdot f_*[C]>0$ を満たすとき、その各点を通る有理曲線を標数0で直接構成する。重み付きジェット空間の負の交点数から正次数のパラメータ直線束を得て、元の曲線類の有効な数値分解へ移る。有理曲線の係数は指定点によらず、反標準次数は $\dim X+1$ 以下である。
abstract_source_url: https://arxiv.org/abs/2609.28465
license_name: arXiv non-exclusive distribution license
license_url: https://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.28465](https://arxiv.org/abs/2609.28465)
- **著者:** Bin Dong, Guoxiong Gao, Bin Guo, Zeming Sun, Bin Wu, Song-Yan Xie
- **初回投稿日:** 2026-09-23
- **最終更新日:** 2026-09-23
- **主分類・副分類:** math.AG, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

標数0の滑らかな射影多様体で、反標準次数が正の曲線上の各点を通る有理曲線をジェットから構成し、Miyaoka–Mori判定法に代数的証明を与える。元の曲線類を、点に依存しない正係数を持つ有理曲線と有効サイクルへ数値分解し、その有理曲線の反標準次数を $\dim X+1$ 以下に抑える。

滑らかな射影多様体 $X$ 上の曲線 $f(C)$ が $-K_X\cdot f_*[C]>0$ を満たすとき、その各点を通る有理曲線を標数0で直接構成する。重み付きジェット空間の負の交点数から正次数のパラメータ直線束を得て、元の曲線類の有効な数値分解へ移る。有理曲線の係数は指定点によらず、反標準次数は $\dim X+1$ 以下である。

以下はAbstractとIntroductionに明記された主張と証明方針の範囲を整理したものであり、後続節の証明を独立に検証したものではない。

## 背景と問題設定

本論文は、滑らかな射影多様体 $X$ 上の曲線 $f(C)$ が $-K_X\cdot f_*[C]>0$ を満たすとき、その各点を通る有理曲線を標数0で直接構成する。Introductionは先行研究の到達点と、今回解決される問題または新たに構成される対象を区別している。

## 主結果

### Miyaoka–Mori判定（Theorem 1.1）

標数0の代数閉体上の滑らかな射影多様体 $X$ と非定数射 $f:C\to X$ が $-K_X\cdot f_*[C]>0$ を満たせば、各 $x\in f(C)$ を通る非定数射 $\mathbb P^1\to X$ が存在する。

### 有効分解（Theorem 1.2）

点に依存しない $\mu>0$ があり、各 $x$ に対し $f_*[C]\equiv \mu R_x+Q_x$ と分解できる。$Q_x$ は有効 $\mathbb Q$-cycle、$R_x$ は $x$ を通る有理曲線で、$-K_X\cdot R_x\leq \dim X+1$ を満たす。

## 証明の見取り図

重み付きジェット空間のtautological classの負の最高交点から水平曲線を取り、有限被覆上の正次数直線束へ移す。高階係数の消滅で有限ジェットを多項式写像へ延長し、ruled surfaceのファイバーから有理曲線と有効分解を得る。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.28465](https://arxiv.org/abs/2609.28465)
- **Introduction:** Section 1
- **Introduction中で言及された主要定理番号:** Theorem 1.1, Theorem 1.2
- **確認したarXivバージョン:** 2609.28465v1
- **確認したライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
