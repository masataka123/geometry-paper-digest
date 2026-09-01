---
layout: paper
title: "Degenerations of elliptic quartics and K-moduli of Fano threefolds"
title_ja: "楕円四次曲線の退化とFano三次元多様体のKモジュライ"
authors: "Ivan Cheltsov, Anne-Sophie Kaloghiros, Robert Śmiech, Junyan Zhao"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We study the K-moduli space of Fano threefolds obtained by first blowing up $\mathbb{P}^3$ along an elliptic quartic curve $C$ and then blowing up a fiber $\ell_p$ of the exceptional divisor $E \to C$. We prove that this K-moduli space is isomorphic to a VGIT quotient parametrizing pairs $(C,p)$, with linearization induced by the CM line bundle. In particular, we classify all K-(semi/poly)stable members of this deformation family. The main new ingredients in the proof include the geometry of the Hilbert scheme of elliptic quartic curves, deformation theory of Fano--K3 pairs, and optimal bounds on the local volumes of threefold singularities.
topic: algebraic-geometry
tags:
  - fano-varieties
  - k-stability
  - moduli
  - singularities
  - birational-geometry
arxiv_id: "2608.30855v1"
arxiv_url: "https://arxiv.org/abs/2608.30855"
arxiv_submitted: "2026-08-31"
arxiv_updated: "2026-08-31"
summary: >-
  $\mathbb P^3$ を楕円四次曲線に沿って吹き上げ、さらに例外因子のファイバーを吹き上げて得るPicard数3のFano三次元多様体族について、Kモジュライ空間を明示的なVGIT商として同定する。K半安定性とK安定性が一致し、許される退化を曲線と標点の幾何で完全に分類する。
abstract_en: ""
summary_en: >-
  This paper determines the K-moduli of a Picard-rank-three family of Fano threefolds built by two successive blowups of projective three-space. The moduli space is identified with a specific variation-of-GIT quotient of pointed elliptic quartics. The analysis shows that semistability coincides with stability in this family and gives an explicit description of every allowed limiting curve and marked point. Hilbert schemes, Fano–K3 deformation theory, and local volume bounds are combined to control the possible degenerations.
abstract_ja: >-
  $\mathbb P^3$ を楕円四次曲線 $C$ に沿って吹き上げ、例外因子 $E\to C$ のファイバー $\ell_p$ をさらに吹き上げて得るFano三次元多様体のKモジュライを調べる。このKモジュライ空間が、対 $(C,p)$ をパラメータ化しCM直線束から線形化を得るVGIT商と同型であることを示す。これにより族のK半安定・K多安定・K安定な元を分類し、証明には楕円四次曲線のHilbertスキーム、Fano–K3対の変形理論、三次元特異点の局所体積評価を用いる。
abstract_source_url: "https://arxiv.org/abs/2608.30855"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.30855](https://arxiv.org/abs/2608.30855)
- **著者:** Ivan Cheltsov, Anne-Sophie Kaloghiros, Robert Śmiech, Junyan Zhao
- **初回投稿日:** 2026-08-31
- **最終更新日:** 2026-08-31
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

対象はIskovskikh–Mori–Mukai分類の族 №3.11 である。まず $(2,2)$ 完全交叉の楕円四次曲線 $C\subset\mathbb P^3$ を吹き上げ、次に例外因子の $p\in C$ 上のファイバー $\ell_p$ を吹き上げる。この族はPicard数3であり、従来のモジュライ連続法では複数因子と非剛直な吹上げ中心の退化を同時に制御する必要がある。

主結果は、この族のKモジュライ空間を対 $(C,p)$ の明示的VGIT商と同定する。全てのK半安定極限が同じ二段階吹上げの形を保ち、K半安定性とK安定性は一致する。

分類は曲線 $C$ の特異性と標点 $p$ の位置で与えられる。$C$ は高々節点をもつ整曲線、または二点で節点的に交わる捩れ三次曲線と直線の和であり、$p$ は次数3以上の成分の滑らかな点でなければならない。

## 背景と問題設定

K安定性はFano多様体上のKähler–Einstein計量の存在判定から生じ、K多安定Fano多様体をパラメータ化するKモジュライへ発展した。本論文の族では、吹上げ中心の楕円四次曲線が退化時に型を変え得るため、個別の安定性計算ではなくモジュライ全体を追跡する必要がある。

## 主結果

### KモジュライとVGIT商（Theorem 1.1）

族 №3.11 のKモジュライスタックは滑らかで連結なDeligne–Mumford成分であり、そのgood moduli spaceは

$$
M^{K}_{\mathrm{№3.11}}\simeq M^{\mathrm{GIT}}\!\left(\frac{5}{21}\right)
$$

と同型である。全てのK半安定元はK安定で、ある $(2,2)$ 完全交叉曲線と例外ファイバーの二段階吹上げとして得られる。

### 安定な対の分類（Theorem 1.2）

$X=\operatorname{Bl}_{\ell_p}\operatorname{Bl}_C\mathbb P^3$ に対し、K半安定、K安定、および次の曲線条件が同値である。$C$ は高々節点特異点をもつ整曲線、または二点で節点的に交わる捩れ三次曲線と直線の和であり、$p$ は次数3以上の成分上の滑らかな点である。したがってK半安定な三次元多様体の特異点は高々通常二重点となる。

## 証明の見取り図

一パラメータ退化で吹下げを与える因子を追跡し、Hodge指数定理の不等式から極限上の $\mathbb P^3$ への双有理収縮を構成する。次に楕円四次曲線のHilbertスキームで可能な極限を分類する。平面四次曲線と埋込点、平面三次曲線と直線、二重平面内の非被約曲線、共通点を通る四直線という病的候補を、局所体積評価、Fano–K3対の変形理論、局所双有理計算によってそれぞれ排除する。残った対に対するVGIT壁越えとCM直線束を計算し、モジュライ同型と分類を得る。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.30855](https://arxiv.org/abs/2608.30855)
- **Introduction:** Introduction, pp. 1–4
- **Introduction中で言及された主要定理番号:** 本文の主結果各小節に記載
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
