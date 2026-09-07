---
layout: paper
title: "Numerical and kodaira dimensions of cotangent bundles"
title_ja: "余接束の数値次元と小平次元"
authors: "Frederic Bruno Campana"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
arxiv_abstract: >-
  We conjecture the equality of the numerical and Kodaira dimensions $ν_1^*(X)$ and $κ_1^*(X)$ for the cotangent bundle of compact Kähler manifolds $X$, generalising the classical case of the canonical bundle. We show or reduce it to the classical case of the canonical bundle for some peculiar manifolds: among them, the rationally connected ones, or resolutions of varieties with klt singularities and trivial first Chern class, in which case we show that $ν_1^*(X)=κ_1^*(X)=q'(X)-dim(X)$, where $q'(X)$ is the maximal irregularity of a finite étale cover of $X$. The proof rests on the Beauville-Bogomolov decomposition, and a direct computation for smooth models of quotients $A/G$ of complex tori by finite groups. We conjecture that these equalities hold true, much more generally, when $X$ is `special'. The invariant $κ_1^*$ was already introduced and studied by Fumio Sakai in [43], the particular case of the preceding conjecture when $κ_1^*(X)=-dim(X)$ was introduced and studied in [29].
topic: algebraic-geometry
tags: 
  - vector-bundles-sheaves
  - positivity
  - calabi-yau-geometry
arxiv_id: "2203.03273v2"
arxiv_url: "https://arxiv.org/abs/2203.03273"
arxiv_submitted: "2022-03-07"
arxiv_updated: "2023-03-06"
summary: >-
  コンパクトKähler多様体の余接束について、正規化した数値次元と小平次元の一致を予想し、いくつかのクラスで検証する。特にklt特異点と消える第一Chern類をもつ多様体の滑らかなモデルでは、両次元を有限エタール被覆の最大不正則度により明示的に計算する。
abstract_en: ""
summary_en: >-
  The article proposes that normalized numerical and Kodaira dimensions agree for cotangent bundles of compact Kähler manifolds. It verifies or reduces this prediction in several special settings. For smooth models of klt spaces with trivial first Chern class, both dimensions are computed from maximal irregularity after finite étale covers, using decomposition theory and an analysis of finite torus quotients.
abstract_ja: >-
  コンパクトKähler多様体の余接束について、数値次元と小平次元を定義し、その一致を予想する。この予想を有理連結多様体などで古典的予想へ帰着し、いくつかの特殊な場合に証明する。特にklt特異点と $c_1=0$ をもつ多様体の滑らかなモデルでは、両不変量が $q\prime(X)-\dim X$ に等しいことを示す。
abstract_source_url: "https://arxiv.org/abs/2203.03273"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2203.03273](https://arxiv.org/abs/2203.03273)
- **著者:** Frédéric Bruno Campana
- **初回投稿日:** 2022-03-07
- **最終更新日:** 2023-03-06
- **主分類・副分類:** math.AG（主分類）, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

線束 $L$ の数値次元 $\nu(X,L)$ と小平–飯高次元 $\kappa(X,L)$ には一般に $\nu\ge\kappa$ が成り立つが、標準束についての等号はabundance予想の中心である。本論文はベクトル束を射影化して同様の次元を定義し、余接束 $\Omega_X^p$ へ適用する。

全てのコンパクト連結Kähler多様体と $p>0$ に対する $\nu_p(X)=\kappa_p(X)$ が主予想である。論文は有理連結多様体、Abel多様体の部分多様体、射影空間の完全交叉などを扱い、場合によって古典的abundanceへ帰着する。

最も明示的な成果は、kltかつ $c_1=0$ のモデルをもつ場合である。余接束の正規化した両次元を、有限エタール被覆で達成される最大不正則度 $q'(X)$ だけから計算する。

## 背景と問題設定

階数 $r$ のベクトル束 $E$ に対し $\pi:\mathbb P(E)\to X$ と $L_E=\mathcal O_{\mathbb P(E)}(1)$ を用いて

$$
\nu(X,E)=\nu(\mathbb P(E),L_E)-(r-1),\qquad
\kappa(X,E)=\kappa(\mathbb P(E),L_E)-(r-1)
$$

と定義する。$E=\Omega_X^p$ の場合を $\nu_p(X),\kappa_p(X)$ と書く。これらは有限エタール被覆と双有理同値の下で保たれる。

## 主結果

### 予想1.6（余接次元のabundance）

任意のコンパクト連結Kähler多様体 $X$ と $p>0$ に対して

$$
\nu_p(X)=\kappa_p(X)
$$

が成り立つと予想する。これは証明済みの主張ではなく、論文が複数のクラスで検証する中心問題である。

### $c_1=0$ のkltモデルに対する計算

Introductionでは主要成果の一つとして次のように述べられている。$X$ がklt特異点と $c_1=0$ をもつ双有理モデルを許すなら、star付きの正規化に対し

$$
\nu_1^*(X)=\kappa_1^*(X)=q'(X)-\dim X
$$

が成り立つ。ここで $q'(X)$ は対応するkltモデルの有限エタール被覆の不正則度の最大値である。

### その他の検証範囲

有理連結の場合の予想を古典的abundance予想へ帰着し、Abel多様体内で法束がampleな部分多様体、および余次元が次元より小さい射影空間内完全交叉でも既知の $\kappa_1$ の計算を $\nu_1$ へ拡張する。

## 証明の見取り図

$c_1=0$ の場合は特異Bogomolov–Beauville分解により、複素トーラス $A$ の有限群商 $A/G$ の滑らかなモデルへ還元する。その商の場合を直接計算する部分が主要な新規入力である。

## 原論文との対応

- **Abstractページ:** [arXiv:2203.03273](https://arxiv.org/abs/2203.03273)
- **Introduction:** Section 1, pp. 2–7
- **Introduction中で言及された主要定理番号:** Conjecture 1.6; Theorems 2.4, 4.5（概説）
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
