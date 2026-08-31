---
layout: paper
title: "Scalar curvature on Kähler blow-ups and systolic inequalities"
title_ja: "Kählerブローアップ上のスカラー曲率とシストリック不等式"
authors: "Zehao Sha, Jian Wang"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  In this paper, we develop the weighted level set method for a Kähler manifold $(X^n,\omega)$ admitting an almost holomorphic map to a possibly singular base $Z$, which is not uniruled. As a key intermediate result, we prove that any blowup $\operatorname{Bl}_SX$ of $X$ along smooth submanifolds $S$ of $ \operatorname{codim} S\ge2$ admits a sequence of Kähler metrics with scalar curvature globally and arbitrarily $C^0$-close to the scalar curvature of $\omega$. As a consequence, we establish the sharp \(2\)-systole estimate for every positive scalar curvature Kähler manifold $(X,\omega)$ and prove $\min_XS(\omega) \cdot\operatorname{sys}_2(\omega) \le 2\pi r(r+1)$, where \(r\) is the rational dimension of $X$, with equality if and only if the universal cover splits as $(\widetilde X,\widetilde \omega) \cong (\mathbb P^r,\omega_{\mathrm{FS}}) \times(Y^{n-r},\omega_{\mathrm{RF}})$ up to normalization where $\omega_{\mathrm{FS}}$ is the Fubini-Study metric and $\omega_{\mathrm{RF}}$ is Ricci-flat. We also show a sharp even-systolic inequality in the same setting when the general fibre is the projective space.
topic: differential-geometry
tags:
  - curvature
  - birational-geometry
arxiv_id: "2608.27433v1"
arxiv_url: "https://arxiv.org/abs/2608.27433"
arxiv_submitted: "2026-08-27"
arxiv_updated: "2026-08-27"
summary: >-
  正スカラー曲率をもつコンパクトKähler多様体の最小2次元サイクルの面積を、有理商の一般ファイバー次元だけで鋭く評価する。任意の滑らかな余次元2以上の中心に沿うブローアップでスカラー曲率を一様近似する定理を構築し、有理商の解消後にも曲率評価を運べるようにした点が中心である。
abstract_en: ""
summary_en: >-
  This work derives a sharp relation between positive scalar curvature and the two-dimensional systole of a compact Kähler manifold. The constant depends on the dimension of the rationally connected part rather than the full complex dimension, and the equality case forces a product splitting of the universal cover. A central analytic ingredient constructs Kähler metrics on iterated blow-ups whose scalar curvature uniformly approaches the pullback of the original scalar curvature. The same framework also gives higher even-dimensional estimates when the relevant fibres are projective spaces.
abstract_ja: >-
  非単線織な底への概正則写像をもつKähler多様体に重み付きレベル集合法を展開する。主要な中間結果として、余次元2以上の滑らかな中心に沿うブローアップ上で、元の計量のスカラー曲率に大域的に一様近似するKähler計量列を構成する。これにより、有理次元 $r$ をもつ正スカラー曲率Kähler多様体について $\min_XS(\omega)\operatorname{sys}_2(\omega)\leq2\pi r(r+1)$ を示し、等号時の普遍被覆を射影空間とRicci平坦因子の積として特徴づける。
abstract_source_url: "https://arxiv.org/abs/2608.27433"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.27433](https://arxiv.org/abs/2608.27433)
- **著者:** Zehao Sha, Jian Wang
- **初回投稿日:** 2026年8月27日
- **最終更新日:** 2026年8月27日
- **主分類・副分類:** math.DG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

シストリック幾何は、非自明なホモロジー類を表すサイクルの最小体積と曲率などの大域量との関係を問う。一般の正スカラー曲率多様体では2-シストールを一様に抑えられないが、Kähler形式が複素曲線を較正し、その面積をコホモロジー的に固定するため、Kählerの場合には強い制約が期待できる。

本論文は、最大有理連結ファイブレーションの一般ファイバーの複素次元 $r$、すなわち有理次元を用いて鋭い評価

$$
\min_X S(\omega)\,\operatorname{sys}_2(\omega)\leq2\pi r(r+1)
$$

を証明する。定数が多様体全体の次元でなく双有理不変量 $r$ のみに依存する点が特徴である。

最大有理連結ファイブレーションは一般に概正則で、底も特異となりうる。グラフを解消するとブローアップ上の正則ファイブレーションが得られるものの、元の計量の引き戻しは例外因子上で退化する。本論文はこの障害を、スカラー曲率を大域的に $C^0$ 近似する真のKähler計量列の構成によって克服する。

## 背景と問題設定

$\operatorname{sys}_2(\omega)$ は非零の整数ホモロジー類を表す2次元サイクルの最小面積である。正スカラー曲率Kähler多様体は単線織であり、その最大有理連結ファイブレーション $X\dashrightarrow Z$ の一般ファイバーは有理連結、底は非単線織となる。ここで

$$
r(X)=\dim_{\mathbb C}X-\dim_{\mathbb C}Z
$$

を有理次元と呼ぶ。これは双有理不変量で、$X$ が有理連結ならちょうど $r(X)=\dim_{\mathbb C}X$ となる。

## 主結果

### 鋭い2-シストリック不等式（Theorem 1.1）

正スカラー曲率をもつコンパクトKähler多様体 $(X^n,\omega)$ と $r=r(X)$ に対して

$$
\min_X S(\omega)\,\operatorname{sys}_2(\omega)\leq2\pi r(r+1)
$$

が成り立つ。等号が成立するのは、2-シストールが有理曲線で実現され、正規化を除いて普遍被覆が

$$
(\widetilde X,\widetilde\omega)\cong
(\mathbb P^r,\sigma\omega_{\mathrm{FS}})\times
(Y^{n-r},\omega_{\mathrm{RF}}),\qquad
\sigma=\operatorname{sys}_2(\omega)
$$

と分裂する場合に限る。ここで $\omega_{\mathrm{RF}}$ はRicci平坦である。

### ブローアップ上のスカラー曲率近似（Theorem 1.2）

滑らかな複素余次元2以上の中心に沿う有限回のブローアップ $\mu:X_J\to X$ に対し、例外因子の全変換を $\widetilde E_j$ とすると、$\varepsilon_{j,\ell}\to0$ で

$$
[\omega_\ell]=\mu^*[\omega]-\sum_{j=1}^J\varepsilon_{j,\ell}^2[\widetilde E_j],
\qquad
\lVert S(\omega_\ell)-\mu^*S(\omega)\rVert_{C^0(X_J)}\to0
$$

を満たすKähler計量列が存在する。例外集合の外では $\omega_\ell$ 自身も $\mu^*\omega$ へ滑らかに収束する。

### 射影空間ファイバーの場合の偶数次シストール（Theorem 1.3）

非単線織な底への概正則ファイブレーションの一般ファイバーが $\mathbb P^r$ であるとき、$1\leq q\leq r$ に対して

$$
\min_XS(\omega)\,\operatorname{sys}_{2q}(\omega)^{1/q}leq2\pi r(r+1)
$$

が成り立つ。Introductionはさらに等号の場合を普遍被覆の積分解によって記述する。

## 証明の見取り図

最大有理連結ファイブレーションのグラフを解消し、滑らかなKähler多様体間の正則ファイブレーションへ置き換える。Theorem 1.2の計量列によって、解消空間上の最小スカラー曲率を元の値へ近づけつつ、ファイバー上で重み付きレベル集合法を適用する。得られたファイバーごとの曲率評価で極限を取り、解消が正則な開集合上では同型であることから、有理曲線を元の $X$ へ戻してシストールを評価する。等号の場合にはファイバーがFubini–Study計量をもつ $\mathbb P^r$ となり、横方向がRicci平坦となることを追跡して積分解を得る。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.27433](https://arxiv.org/abs/2608.27433)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2, 1.3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
