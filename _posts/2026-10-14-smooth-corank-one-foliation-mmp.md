---
layout: paper
title: MMP for smooth co-rank one foliations
title_ja: 滑らかな余階数1葉層のMMPと極小モデル
authors: Paolo Cascini, Calum Spicer
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We prove the existence of minimal models for smooth co-rank one foliations of general type.
topic: algebraic-geometry
tags:
- foliations
- minimal-model-program
- birational-geometry
- singularities
arxiv_id: 2610.16727v1
arxiv_url: https://arxiv.org/abs/2610.16727
arxiv_submitted: '2026-10-12'
arxiv_updated: '2026-10-12'
summary: 滑らかな射影多様体上の滑らかな余階数1葉層に対し、葉層の標準類がbigなら極小モデル、擬有効でなければMoriファイバー空間へ至るMMPを示す。局所正則第一積分を持つ葉層の錐定理と、MMPで保たれるquasi-smooth性が任意次元への拡張を支える。
abstract_en: We prove the existence of minimal models for smooth co-rank one foliations of general type.
summary_en: ''
abstract_ja: 滑らかな射影多様体上の滑らかな余階数1葉層について、一般型の場合に極小モデルの存在を証明する。Introductionでは、標準類が擬有効でない場合にMoriファイバー空間へ至ることも述べられる。局所正則第一積分を許す葉層の錐定理を確立し、MMP中の特異点を扱えるquasi-smoothな葉層の枠組みを用いる。
abstract_source_url: https://arxiv.org/abs/2610.16727
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.16727v1](https://arxiv.org/abs/2610.16727)
- **著者:** Paolo Cascini, Calum Spicer
- **初回投稿日:** 2026-10-12
- **最終更新日:** 2026-10-12
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

滑らかな葉層でも、高次元ではその標準類を調べるために双有理的な簡単化が必要となる。しかしMMPを実行すると、出発点では滑らかだった多様体や葉層に特異点が生じる。このため、滑らかな場合の性質を保ちながらMMPを続けられる枠組みが必要である。

本論文は、滑らかな射影多様体上の滑らかな余階数1葉層について、その標準類がbigであれば極小モデル、擬有効でなければMoriファイバー空間へ至るMMPを示す。三次元で知られていた結果を任意次元へ拡張する。

基礎となるのは、局所正則第一積分を持つ葉層の錐定理である。さらにquasi-smoothな葉層という、特異な全空間上でも扱えるクラスを導入し、それがMMPで保存されることを用いる。擬有効だがbigでない一般の場合の極小モデル存在を、この主定理だけから結論することはできない。

## 背景と問題設定

<p>滑らかな射影多様体 $X$ 上の余階数1葉層 $\mathcal F$ は、接方向の階数が $\dim X-1$ の葉層である。その標準類を $K_{\mathcal F}$ と書く。曲面では滑らかな葉層は有理曲線によるファイブレーションであるか、標準類がnefであるかという二分が分類に役立つが、高次元ではそのまま成立しない。</p>

局所正則第一積分の存在は、葉を局所的に正則関数の等位集合として捉える性質である。MMPの後にもこの性質を保つことが、特異点の現れた空間上で葉層を制御する鍵となる。

## 主結果

### 極小モデルまたはMoriファイバー空間への到達（Theorem 1.1）

<p>$X$ が滑らかな射影多様体、$\mathcal F$ が滑らかな余階数1葉層であり、$K_{\mathcal F}$ がbigまたは擬有効でないとする。このとき $K_{\mathcal F}$-MMP $\varphi:X\dashrightarrow X'$ を実行し、$\mathcal F'=\varphi_*\mathcal F$ について以下を得る。</p>

<p>bigの場合には $K_{\mathcal F'}$ がnefとなり、極小モデルが得られる。擬有効でない場合には正規射影多様体 $Z$ への収縮 $\eta:X'\to Z$ が存在して、</p>

<div>
$$
\dim Z\lt \dim X,\qquad \rho(X'/Z)=1,\qquad
-K_{\mathcal F'}\text{ は }\eta\text{-ample}
$$
</div>

となる。後者が葉層のMoriファイバー空間である。結論はこのように終わるMMPを実行できることであり、任意に選んだすべてのMMPの停止と読み替えない。

### 局所第一積分を持つ葉層の錐定理（Theorem 1.2）

<p>$X$ を正規射影多様体、$\mathcal F$ を局所正則第一積分を持つ余階数1葉層、$\Delta\ge0$ を $K_{\mathcal F}+\Delta$ が $\mathbb Q$-Cartierとなる $\mathbb Q$-因子とする。このとき曲線の閉錐は</p>

<div>
$$
\overline{\operatorname{NE}}(X)=
\overline{\operatorname{NE}}(X)_{K_{\mathcal F}+\Delta\ge0}
+Z_{-\infty}+\sum_i\mathbb R_{\ge0}[\xi_i]
$$
</div>

と分解できる。ここで各曲線は葉層に接する有理曲線であり、

<div>
$$
0\lt -(K_{\mathcal F}+\Delta)\cdot\xi_i\le2\dim X
$$
</div>

<p>を満たす。$Z_{-\infty}$ は葉層対のnon-log-canonical centreに含まれる曲線の類が生成する閉錐である。非lc部分を明示した上で、標準類が負となる方向を葉に接する有理曲線によって捉える。</p>

## 証明の見取り図

錐定理は次元に関する帰納法で示す。低次元の錐定理からdlt改変に類似する特殊な改変を構成し、それと低次元の結果を用いて当該次元の錐定理を得る。ここには複素解析空間間の射影射のMMPに関する近年の結果を使う。

<p>quasi-smoothな葉層では、滑らかな部分上のBott部分接続から得る消滅が特異部分を越えて延長され、葉層に接する曲線 $C$ に対し $K_{\mathcal F}\cdot C=K_X\cdot C$ が成り立つ。このため葉層の負の端射線に沿うMMPの各段階を、空間自身のMMPとして実現できる。</p>

最後に、MMPで局所正則第一積分が失われないことを示す。IntroductionはMalgrangeの定理の特異空間上での変種を、Cerveau–Lins Netoの仕事に基づいて使うと説明する。これが必要な葉層のクラスを保存し、主定理までMMPを進める役割を担う。

## 原論文との対応

- **Abstractページ:** [MMP for smooth co-rank one foliations](https://arxiv.org/abs/2610.16727)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.16727v1) — Section 1, pp. 1–3（Section 2より前）。
- **Introduction中で言及された主要結果:** Theorem 1.1（Corollary 5.2）、Theorem 1.2（Theorem 4.2）。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.16727v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source_scope:** Abstract and Introduction
