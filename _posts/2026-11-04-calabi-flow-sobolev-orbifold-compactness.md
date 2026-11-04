---
layout: paper
title: Convergence of the Calabi flow on Kähler surfaces with bounded Sobolev constants
title_ja: Sobolev定数が有界なCalabi流のorbifold収束
authors: Haozhao Li, Bing Wang, Kai Zheng
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.GT
arxiv_abstract: 'We study global Calabi flows $g(t)$ on compact K\"ahler surfaces with a uniform Sobolev constant. For any sequence $t_j\to\infty$, set $g_j(t):=g(t_j+t)$. After passing to a subsequence, these flows converge to an eternal Calabi flow on a compact extremal K\"ahler orbifold surface. The convergence holds in the spacetime $\hat C^\infty$-Cheeger--Gromov topology: it is uniform in the Gromov--Hausdorff sense on compact time intervals and smooth away from the orbifold singularities, using comparisons fixed in time.'
topic: differential-geometry
tags:
- csck-extremal-kahler-metrics
- metric-limits
- noncompact-kahler-geometry
- curvature
arxiv_id: 2611.01882v1
arxiv_url: https://arxiv.org/abs/2611.01882
arxiv_submitted: '2026-11-01'
arxiv_updated: '2026-11-01'
summary: コンパクトKähler曲面上の大域的Calabi流に、一様Sobolev評価だけを課して長時間の部分列極限を構成する。極限は孤立商特異点をもつextremal Kähler orbifold上の永遠解であり、時刻によらない比較写像による時空間収束を得る。一般の極限の一意性や滑らかさは別問題として残る。
abstract_en: ''
summary_en: A uniform Sobolev inequality is used to control late-time limits of a global Calabi flow on a compact complex surface. The limiting object is an eternal flow on an extremal Kähler orbifold, with convergence formulated using comparison maps that do not change with time. A key restriction on shrinking-scale bubbles comes from keeping the complex structure and the real Kähler class fixed. The theorem supplies subsequential compactness and convergence of Calabi energy, without asserting that every subsequence has the same orbifold limit.
abstract_ja: 固定した実Kähler類で大域的に存在する曲面上のCalabi流を扱う。一様なSobolev定数の下で任意の無限時間列から部分列を取り、extremal Kähler orbifold上の永遠Calabi流へ時空間的に収束させる。正則部分での滑らかな収束と、時間区間上一様なGromov–Hausdorff収束を同じ時間非依存の比較で実現し、体積とCalabiエネルギーの収束も示す。縮小スケールで現れるnull scalar-flat ALEモデルが局所正則性の改善を支える。
abstract_source_url: https://arxiv.org/abs/2611.01882
license_name: Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
license_url: http://creativecommons.org/licenses/by-nc-nd/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.01882v1](https://arxiv.org/abs/2611.01882)
- **著者:** Haozhao Li, Bing Wang, Kai Zheng
- **初回投稿日:** 2026-11-01
- **最終更新日:** 2026-11-01
- **主分類・副分類:** math.DG（主分類）; math.GT
- **ライセンス:** [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](http://creativecommons.org/licenses/by-nc-nd/4.0/)

## 要約

Calabi流が長時間存在する場合、その後半の計量が何へ近づくのかを理解したい。スカラー曲率のエネルギーが減少しても、それだけでは曲率の集中や特異点の形成を除けない。本論文はコンパクトKähler曲面で、一様Sobolev評価から長時間極限を構成する。

任意の時刻列を無限大へ進め、各時刻を新たな時間原点として流を観察する。著者らはその部分列が、孤立商特異点をもつコンパクトKähler orbifold上の永遠解へ収束することを示す。極限計量はすべてextremalで、時間変化は正則自己同型による引き戻しで表される。

重要なのは、各時刻を別々に比較するのではなく、時間によらない比較写像を使って時空間として収束させることである。正則部分での滑らかな収束、コンパクト時間区間上一様な距離空間収束、体積とエネルギーの収束が整合する。

この定理は部分列極限を与えるもので、どの部分列でも同じ極限になることや、特異点が存在しないことまでを一般に述べるものではない。偏極や安定性などの追加情報を使う後続の研究の解析的な基盤となる。

## 背景と問題設定

$(M,J)$を連結コンパクト複素曲面とし、固定した実Kähler類$\Omega$内の滑らかな流

$$
\partial\_t\omega=\sqrt{-1}\partial\bar\partial S,\qquad t\in[0,\infty)
$$

を考える。$S$は複素スカラー曲率、$V$は体積とする。すべての時刻で同じ定数$A$により

$$
\Vert u\Vert\_{L^4(g(t))}^2\leq A\left(\int\_M|\nabla u|\_{g(t)}^2dV\_{g(t)}+V^{-1/2}\int\_Mu^2dV\_{g(t)}\right)
$$

が成立することを仮定する。

Calabiエネルギー$\mathcal C(t)=\int\_M(S-\bar S)^2dV$には

$$
\frac{d}{dt}\mathcal C(t)=-2\int\_M|\bar\partial\nabla^{1,0}S|^2dV\leq0
$$

という散逸式がある。ただしCalabi流は4階なので、通常の放物型最大値原理を曲率にそのまま使えない。Sobolev評価も直接の点ごとの曲率評価ではなく、正則性を改善する別の仕組みが必要になる。

## 主結果

### 長時間orbifoldコンパクト性（Theorem 1.1）

任意の$t\_j\to\infty$に対し、時間移動した$g\_j(\tau)=g(t\_j+\tau)$の一つの部分列は、すべてのコンパクト時間区間で時空間$\widehat C^\infty$-Cheeger–Gromovの意味で収束する。極限は連結コンパクトKähler orbifold$(X,J\_\infty)$上の滑らかな永遠Calabi流$h(\tau)$である。特異集合$\mathcal S$は有限で、空でもよい。

正則部分は各時刻で測地的に凸である。極限計量はextremalであり、完備な実正則ベクトル場

$$
W\_0=\tfrac12\nabla\_{h(0)}S\_{h(0)}
$$

が生成するorbifold双正則写像$F\_\tau$によって

$$
h(\tau)=F\_\tau^\ast h(0),\qquad\bar\partial\_{J\_\infty}\nabla^{1,0}\_{h(\tau)}S\_{h(\tau)}=0
$$

と書ける。$F\_\tau$は各特異点を固定する。この極限の時間発展を表す写像と、収束を定義する時間非依存の比較写像は別物である。

体積測度はコンパクト時間区間上一様に弱収束し、

$$
\operatorname{Vol}(X,h(\tau))=V,\qquad\int\_XS\_{h(\tau)}dV\_{h(\tau)}=V\bar S
$$

が成り立つ。Calabiエネルギーにも任意の$T>0$に対して

$$
\lim\_{j\to\infty}\sup\_{|\tau|\leq T}\left|\mathcal C(g(t\_j+\tau))-\mathcal C(h(\tau))\right|=0
$$

が成立する。極限に非零の正則ベクトル場がなければ極限流は定常でcscKとなるが、一般には非定常なextremal流を許す。

## 証明の見取り図

縮小スケールのモデルには、scalar-flat ALE Kähler orbifoldのうち、正則部分の任意のコンパクトな滑らかな閉向き付き実曲面$\Sigma$に対して

$$
\int\_\Sigma\omega\_h=0
$$

となるnullモデルを用いる。この条件は、もとの複素構造と実Kähler類を固定していることから得られる。例外曲線が正の面積をもつBurns計量を除き、Euclidean endをもつ非平坦な泡が正則点の上に隠れることを防ぐ。

モデルのコンパクト性を確立した後、時空間のcanonical radiusを定める。散逸の小ささ、固定類から来る周期の制約、ALEモデルの剛性により、この半径がつぶれるという仮定から矛盾を導く。4階の流に対応する時間スケールは空間半径$r$に対して$r^4$である。

そこから局所的な後方正則性を得て、長い有限時間区間の前後方向の評価へ進む。時刻ごとの極限を同じ点として整合させ、固定した比較写像上で滑らかな収束を取る。最後に縮小スケールのscalar-flat性と円錐領域での評価を使い、スカラー曲率エネルギーの損失がないことを示す。一般の初期局所条件だけからの前方擬局所性を主張するのではなく、遅い時刻での幾何学的評価と小さなエネルギー減少を利用する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.01882)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.01882v1) — Section 1, pp. 2–7
- **Introduction中で言及された主要結果:** Theorem 1.1 (I)–(IV)
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.01882v1
- **確認したライセンス:** [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](http://creativecommons.org/licenses/by-nc-nd/4.0/)
- **source\_scope:** Abstract and Introduction
