---
layout: paper
title: Complete Kähler Manifolds with pinched Ricci curvature
title_ja: Ricci曲率のピンチ条件と完備Kähler多様体のコンパクト性
authors: Yuxing Deng, Ruyi Ji
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: In this paper, we prove that a connected complete K\"ahler manifold of complex dimension at least two satisfying $\Ric\geq\varepsilon Rg\geq0$ for a fixed $\varepsilon>0$ is compact or Ricci-flat.
topic: differential-geometry
tags:
- curvature
- noncompact-kahler-geometry
- hodge-theory
- l2-methods
arxiv_id: 2610.40419v1
arxiv_url: https://arxiv.org/abs/2610.40419
arxiv_submitted: '2026-10-29'
arxiv_updated: '2026-10-29'
summary: Ricci曲率がスカラー曲率に対して一様に下から比較できる完備Kähler多様体を調べる。複素次元2以上ではコンパクトかRicci平坦になるという定理を述べ、曲率の大域的可積分性を仮定せず局所評価から導く。
abstract_en: ''
summary_en: The study asks whether uniform pointwise comparability of nonnegative Ricci curvature can replace a positive constant lower bound in a compactness theorem. It asserts a compact-or-Ricci-flat alternative for complete Kähler manifolds of complex dimension at least two. The noncompact case is addressed through localized curvature estimates rather than an assumed global curvature integral. Mixed Hodge–Riemann relations enter the higher-dimensional argument.
abstract_ja: 非負Ricci曲率の各方向の大きさをスカラー曲率で一様に制御すると、多様体の非コンパクト性がどこまで許されるかを問う。著者らは複素次元2以上の連結完備Kähler多様体について、固定された正定数εに対するRic≥εRg≥0という条件から、コンパクトまたはRicci平坦という二者択一を導く。Introductionの主定理は追加の体積増大条件を置かず、証明方針では局所化評価と混合Hodge–Riemann関係を使って必要な曲率の可積分性を構成する。
abstract_source_url: https://arxiv.org/abs/2610.40419
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.40419v1](https://arxiv.org/abs/2610.40419)
- **著者:** Yuxing Deng, Ruyi Ji
- **初回投稿日:** 2026-10-29
- **最終更新日:** 2026-10-29
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Bonnet–Myers定理では、Ricci曲率に一様な正の下界があれば完備多様体はコンパクトになる。本論文は、絶対的な正の下界の代わりに、同じ点におけるRicci曲率の各固有値を比較する条件から何が言えるかを調べる。

著者らが述べる主定理は、複素次元2以上の連結完備Kähler多様体に対する「コンパクトまたはRicci平坦」という二者択一である。仮定は固定された正定数による非負Ricci曲率のピンチ条件であり、定理の文言には曲率の減衰やEuclidean体積増大は追加されていない。

非コンパクトの場合、スカラー曲率が消えることを目指す。著者らは、最初から曲率の大域的可積分性を仮定するのではなく、コンパクトな台を持つ関数による局所評価から必要な可積分性を導く方針を説明する。結論のRicci平坦性は、すべてのRiemann曲率が消える平坦性とは区別される。

## 背景と問題設定

$g$ をRiemann計量、$\operatorname{Ric}$ をRicciテンソル、$R$ をスカラー曲率とする。Hamilton–Ni予想は、実次元3以上の完備Riemann多様体で

$$
\operatorname{Ric}\geq\epsilon Rg\geq0,\qquad\epsilon>0\text{ は全体で固定}
$$

を仮定するとコンパクトまたはRicci平坦になるという問題である。点ごとに任意に小さくなる係数を許す条件ではない。

Introductionは、Ricci流を用いた三次元の結果や、Kählerの場合の二正則断面曲率・体積増大・曲率減衰に仮定を加えた先行研究を紹介している。なお先行研究との比較段落には追加仮定を保持する趣旨の一文があるが、直後のTheorem 1.1は上記のピンチ条件のみを列記している。本記事はこの明記された定理の仮定に従い、論文全体の証明を検証済みとは扱わない。

## 主結果

### Kählerの場合の二者択一（Theorem 1.1）

$(M^{2m},g,J)$ を連結完備Kähler多様体、$m\geq2$ とする。固定した $\epsilon>0$ について上記不等式が成り立つなら、

$$
M\text{ はコンパクト}\quad\text{または}\quad\operatorname{Ric}\equiv0
$$

となる。特に非コンパクトな場合にはRicci曲率が恒等的にゼロである。Kähler条件と複素次元の制限は定理の一部であり、任意の高次元Riemann多様体に対する一般予想の解決を主張するものではない。

## 証明の見取り図

非コンパクトの場合を考え、縮約Bianchi恒等式、Kähler Hessianの恒等式、スペクトル定理から局所化した二次評価を得る。複素次元2では固定した外側の球の内部で反復し、曲率の二乗可積分性を得てから環状のカットオフで消滅を導く。

高次元ではKähler形式 $\omega$ とRicci形式 $\rho$ から作る閉形式、および混合Hodge–Riemann関係を用いて高い冪の評価へ進む。Introductionでは、補助楕円作用素のレゾルベントのパラメータを正に保ったまま低次評価を使う点を強調している。最後に臨界指数で $R\in L^m(M)$ を導き、Bishop–Gromov比較とカットオフによりその積分を消滅させる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.40419)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.40419v1) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorem 1.1（Conjecture 1.1は背景となる一般Riemann多様体の予想）
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.40419v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
